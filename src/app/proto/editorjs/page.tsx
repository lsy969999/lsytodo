// 'use client'

import React, { Suspense, useEffect, useRef } from 'react'

import dynamic from 'next/dynamic';

const EditorComponent = dynamic(() => import('./component/editorjscomponent'), {
  loading: () => <div>...loading</div>,
  ssr: false,
});

const page = () => {
  return (
    <div>
      <header>editorjs</header>
      <EditorComponent></EditorComponent>
    </div>
  )
}

export default page