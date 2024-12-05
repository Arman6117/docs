import { EditorState, Transaction } from "@tiptap/pm/state";
import { Extension } from "@tiptap/react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    lienHeight: {
      setLineHeight: (lineHeight: string) => ReturnType;
      unsetLineHeight: () => ReturnType;
    };
  }
}

export const LineHeightExtension = Extension.create({
  name: "lineHeight",

  addOptions() {
    return {
      types: ["paragraph", "heading"],
      defaultLineHeight: "normal",
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: this.options.lineHeightExtension,
            parseHTML: (element) =>
              element.style.lineHeight || this.options.defaultLineHeight,
            renderHTML: (attributes) => {
              if (!attributes.lineHeight) {
                return {};
              }
              return {
                style: `line-height: ${attributes.lineHeight}`,
              };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setLineHeight:
        (lineHeight: string) =>
        ({
          tr,
          state,
          dispatch,
        }: {
          tr: Transaction;
          state: EditorState;
          dispatch?: (tr: Transaction) => void;
        }) => {
          const { selection } = state;
          tr = tr.setSelection(selection);
          const { from, to } = selection;

          state.doc.nodesBetween(from, to, (node, pos:number) => {
            if (this.options.types.includes(node.type.name)) {
              tr = tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                lineHeight,
              });
            }
          });
          if (dispatch) dispatch(tr);
          return true;
        },
      unsetLineHeight:
        () =>
        ({
          tr,
          state,
          dispatch,
        }: {
          tr: Transaction;
          state: EditorState;
          dispatch?: (tr: Transaction) => void;
        }) => {
          const { selection } = state;
          tr = tr.setSelection(selection);
          const { from, to } = selection;

          state.doc.nodesBetween(from, to, (node, pos:number) => {
            if (this.options.types.includes(node.type.name)) {
              tr = tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                lineHeight: this.options.defaultLineHeight,
              });
            }
          });
          if (dispatch) dispatch(tr);
          return true;
        },
    };
  },
});
