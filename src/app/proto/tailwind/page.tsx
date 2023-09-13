'use client'

import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs'

import dynamic from 'next/dynamic';


const page = () => {


    const ejInstance = useRef<EditorJS>();

    useEffect(() => {
        if (ejInstance.current === null) {
          initEditor();
        }
    
        return () => {
          ejInstance?.current?.destroy();
          ejInstance.current = undefined;
        };
      }, []);

    const DEFAULT_INITIAL_DATA =  {
        "time": new Date().getTime(),
        "blocks": [
          {
            "type": "header",
            "data": {
              "text": "This is my awesome editor!",
              "level": 1
            }
          },
        ]
    }

    const initEditor = () => {
        const editor = new EditorJS({
           holder: 'editorjs',
           onReady: () => {
            
             ejInstance.current = editor;
             console.log(123);
           },
           autofocus: true,
           data: DEFAULT_INITIAL_DATA,
           onChange: async () => {
             let content = await editor.saver.save();
 
             console.log(content);
           }
         });
       };
  return (
    <div>
        <h1>tailwind css</h1>
        <div id='editorjs'></div>
    </div>
  )
}

export default page