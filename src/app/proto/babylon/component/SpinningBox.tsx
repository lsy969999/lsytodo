

import { Color3, Mesh, Vector3 } from '@babylonjs/core';
import React, { useRef, useState } from 'react'
import { useBeforeRender, useClick, useHover } from 'react-babylonjs';
const DefaultScale = new Vector3(1,1,1);
const BiggerScale = new Vector3(1.25, 1.25, 1.25)

interface SpinningBoxProps {
    name: string;
    position: Vector3;
    color: Color3;
    hoveredColor: Color3
}

const SpinningBox = (props: SpinningBoxProps) => {
    const boxRef = useRef<Mesh>(null)
    const [clicked, setClicked] = useState(false)
    useClick(()=>setClicked(clicked=>!clicked), boxRef)
    const [hovered, setHovered] = useState(false)
    useHover(
        ()=>setHovered(true),
        ()=>setHovered(false),
        boxRef
    )
    const rpm = 5
    useBeforeRender((scene)=>{
        if(boxRef.current){
            var deltaimeInMillis = scene.getEngine().getDeltaTime()
            boxRef.current.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaimeInMillis/1000)
        }
    })
  return (
    <box
        name={props.name}
        ref={boxRef}
        size={2}
        position={props.position}
        scaling={clicked ? BiggerScale : DefaultScale}
    >
        <standardMaterial
            name={`${props.name}-mat`}
            diffuseColor={hovered ? props.hoveredColor : props.color}
            specularColor={Color3.Black()}
        ></standardMaterial>
    </box>
  )
}

export default SpinningBox