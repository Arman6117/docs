import { BsCloudCheck}  from "react-icons/bs"

const DocumentId = () => {
  return (
    <div className='flex gap-2 items-center'>
    <span className='text-lg px-1.5  cursor-pointer truncate'>
        Untitled 
    </span>
    <BsCloudCheck className="tex"/>
    </div>
  )
}

export default DocumentId
 