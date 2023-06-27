
import { useGLTF } from "@react-three/drei";
import { calcPosition, snapGaps, calcScale, initScale } from '../../Functions/3dCalc/calcScale';
import Handles from "../Handles/index";
import Shelf from "../Shelf";

export function Closet4Doors({
  width = 1.61,
  height = 2.4,
  depth = 0.59,
  isSokol,
  material,
  handleType,
  withDoors = false,
  shelvesNumberLeft = 7,
  shelvesNumberRight = 5,
  isLeftPole,
  isRightPole,
  ...props
}) {
  const defaultDimensions = [1.61, 2.4, 0.59]
  const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb");
  const scale = initScale(defaultDimensions, [width, height, depth])
  return (
    <group {...props} dispose={null}>
      <group
        position={snapGaps("-", 0.1, scale, [0, 0, 0], [0, 1, 0])}
      >
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
          position={
            snapGaps("-", 0.0165, scale,
              calcPosition([0.808, 0.108, 0.3], [scale.X, scale.Y, scale.Z])
              , [0, 1, 0])
          }
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
          position={
            snapGaps("+", 0.0165, scale,
              calcPosition([0.808, 2.392, 0.3], [scale.X, scale.Y, scale.Z])
              , [0, 1, 0])
          }
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
            {/* <Handles width={width} height={height} depth={depth} scale={scale} /> */}
          </group>
        )}
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
      <Shelf height={height} shelvesNumber={shelvesNumberLeft} scale={scale} depth={depth} width={width} position={nodes.shelfLeft.position} />
      <Shelf height={height} shelvesNumber={shelvesNumberRight} scale={scale} depth={depth} width={width} position={nodes.shelfRight.position} />
    </group>
  );
}

useGLTF.preload("assets/3dModels/Closet4Doors.glb");
