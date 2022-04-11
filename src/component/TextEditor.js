import React, { useState } from "react"
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { EditorState, convertToRaw } from "draft-js"
import draftToHtml from "draftjs-to-html"

const DraftJs = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
        <textarea
            disabled
            value={
                draftToHtml(convertToRaw(editorState.getCurrentContent()))
        }></textarea>
    </div>
  )
}

export default DraftJs