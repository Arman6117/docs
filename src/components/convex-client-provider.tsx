"use client";

import { ReactNode } from "react";
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth, ClerkProvider } from "@clerk/clerk-react";

import FullscreenLoader from "./fullscreen-loader";
import { SignIn } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className="flex flex-col items-center justify-center">
            <SignIn routing="hash" />
          </div>
        </Unauthenticated>
        <AuthLoading>
          <FullscreenLoader />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
