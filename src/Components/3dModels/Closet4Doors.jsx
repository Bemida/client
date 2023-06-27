import React, { useRef, useState } from "react";

import { useGLTF } from "@react-three/drei";
import Handles from "../Handles/Handles";
import {
  calcPosition,
  snapGaps,
  calcScale,
  initScale,
} from "../../Functions/3dCalc/calcScale";

export function Closet4Doors({
  width = 1,
  height = 1,
  depth = 1,
  isSokol,
  material,
  handleType,
  withDoors = true,
  RightShelvesNumber,
  LeftShelvesNumber,
  isLeftPole,
  isRightPole,
  ...props
}) {
  const defaultDimensions = [1.61, 2.4, 0.59];

  const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb");

  const scale = initScale(defaultDimensions, [width, height, depth]);

  console.log(scale);

  return (
    <group {...props} dispose={null}>
      <group position={snapGaps("-", 0.1, scale, [0, 0, 0], [0, 1, 0])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poleLeft.geometry}
          material={materials.chrome}
          position={calcPosition(
            [0.426, 2.295, 0.3],
            [scale.X, scale.Y, scale.Z]
          )}
          scale={calcScale(1, [scale.X, 1, 1])}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poleRight.geometry}
          material={materials.chrome}
          position={calcPosition(
            [1.226, 2.295, 0.3],
            [scale.X, scale.Y, scale.Z]
          )}
          scale={calcScale(1, [scale.X, 1, 1])}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftPanel.geometry}
          material={materials.wood_1}
          position={calcPosition(
            [0.008, 1.25, 0.3],
            [scale.X, scale.Y, scale.Z]
          )}
          scale={calcScale(1, [1, scale.Y, scale.Z])}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.backPanel.geometry}
          material={materials.wood_1}
          position={calcPosition(
            [0.808, 1.25, 0.002],
            [scale.X, scale.Y, scale.Z]
          )}
          scale={calcScale(1, [scale.X, scale.Y, 1])}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottomPanel.geometry}
          material={materials.wood_1}
          position={snapGaps(
            "-",
            0.0165,
            scale,

            calcPosition([0.808, 0.108, 0.3], [scale.X, scale.Y, scale.Z]),

            [0, 1, 0]
          )}
          scale={calcScale(1, [scale.X, 1, scale.Z])}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightPanel.geometry}
          material={materials.wood_1}
          position={calcPosition(
            [1.608, 1.25, 0.3],
            [scale.X, scale.Y, scale.Z]
          )}
          scale={calcScale(1, [1, scale.Y, scale.Z])}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.topPanel.geometry}
          material={materials.wood_1}
          position={snapGaps(
            "+",
            0.0165,
            scale,
            calcPosition([0.808, 2.392, 0.3], [scale.X, scale.Y, scale.Z]),
            [0, 1, 0]
          )}
          scale={calcScale(1, [scale.X, 1, scale.Z])}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.divider.geometry}
          material={materials.wood_1}
          position={calcPosition(
            [0.809, 1.242, 0.3],
            [scale.X, scale.Y, scale.Z]
          )}
          scale={calcScale(1, [1, scale.Y, scale.Z])}
        />

        {withDoors && (
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door1.geometry}
              material={materials.wood_1}
              position={calcPosition(
                [0.2, 1.25, 0.603],
                [scale.X, scale.Y, scale.Z]
              )}
              scale={calcScale(-1, [scale.X, scale.Y, 1])}
              rotation={[-Math.PI, 0, 0]}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door2.geometry}
              material={materials.wood_1}
              position={calcPosition(
                [0.602, 1.25, 0.603],
                [scale.X, scale.Y, scale.Z]
              )}
              scale={calcScale(1, [scale.X, scale.Y, 1])}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door3.geometry}
              material={materials.wood_1}
              rotation={[-Math.PI, 0, 0]}
              position={calcPosition(
                [1.015, 1.25, 0.603],
                [scale.X, scale.Y, scale.Z]
              )}
              scale={calcScale(-1, [scale.X, scale.Y, 1])}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.door4.geometry}
              material={materials.wood_1}
              position={calcPosition(
                [1.415, 1.25, 0.603],
                [scale.X, scale.Y, scale.Z]
              )}
              rotation={[-Math.PI, 0, 0]}
              scale={calcScale(-1, [scale.X, scale.Y, 1])}
            />
          </group>
        )}

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shelfLeft.geometry}
          material={materials.wood_1}
          position={calcPosition(
            [0.408, 1.23, 0.297],
            [scale.X, scale.Y, scale.Z]
          )}
          scale={calcScale(1, [scale.X, 1, scale.Z])}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shelfRight.geometry}
          material={materials.wood_1}
          position={calcPosition(
            [1.208, 1.23, 0.297],
            [scale.X, scale.Y, scale.Z]
          )}
          scale={calcScale(1, [scale.X, 1, scale.Z])}
        />
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.legBackLeft.geometry}
        material={materials["chrome.001"]}
        position={calcPosition(
          [0.101, 0.05, 0.052],
          [scale.X, scale.Y, scale.Z]
        )}

      // scale={calcScale(1, [scale.X, scale.Y, 1])}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.legBackRight.geometry}
        material={materials["chrome.001"]}
        position={calcPosition(
          [1.538, 0.05, 0.052],
          [scale.X, scale.Y, scale.Z]
        )}

      // scale={calcScale(1, [scale.X, scale.Y, 1])}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.legFrontLeft.geometry}
        material={materials["chrome.001"]}
        position={calcPosition(
          [0.101, 0.05, 0.512],
          [scale.X, scale.Y, scale.Z]
        )}

      // scale={calcScale(1, [scale.X, scale.Y, 1])}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.legFrontRight.geometry}
        material={materials["chrome.001"]}
        position={calcPosition(
          [1.538, 0.05, 0.512],
          [scale.X, scale.Y, scale.Z]
        )}

      // scale={calcScale(1, [scale.X, scale.Y, 1])}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sokolBack.geometry}
        material={materials.wood_1}
        position={calcPosition(
          [0.806, 0.05, 0.008],
          [scale.X, scale.Y, scale.Z]
        )}
        scale={calcScale(1, [scale.X, 1, 1])}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sokolFront.geometry}
        material={materials.wood_1}
        position={calcPosition(
          [0.806, 0.05, 0.585],
          [scale.X, scale.Y, scale.Z]
        )}
        scale={calcScale(1, [scale.X, 1, 1])}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sokolLeft.geometry}
        material={materials.wood_1}
        position={calcPosition(
          [0.01, 0.05, 0.296],
          [scale.X, scale.Y, scale.Z]
        )}
        scale={calcScale(1, [1, 1, scale.Z])}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sokolRight.geometry}
        material={materials.wood_1}
        position={calcPosition(
          [1.601, 0.05, 0.296],
          [scale.X, scale.Y, scale.Z]
        )}
        scale={calcScale(1, [1, 1, scale.Z])}
      />
      <Handles width={width} height={height} depth={depth} scale={scale} />
    </group>
  );
}

useGLTF.preload("assets/3dModels/Closet4Doors.glb");
