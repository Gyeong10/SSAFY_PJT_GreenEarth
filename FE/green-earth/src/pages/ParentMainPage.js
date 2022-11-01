
import "../style/ParentMain.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
// import Home from "./pages/Home";
import {useRef} from 'react'
//import {useState} from 'react'
import {Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,useAnimations } from '@react-three/drei'
import Mission from '../components/ChildMainPage/Mission.js'
import rocket from '../image/rocket.png'
import start from '../image/start.png'
import end from '../image/end.png'
import { Color } from "three";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomePage from "./WelcomePage";
// import useAnimations from 'react-useanimations';
function Model(props) {
  const { nodes, materials } = useGLTF('/earth/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, -300]} rotation={[-Math.PI / 3, 0, 0]} scale={7}>

            <mesh geometry={nodes.Object_5.geometry} material={materials['lambert2SG.001']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['lambert2SG.001']} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

function Model2(props) {
  const { nodes, materials } = useGLTF('/animal/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, -3500, -12000]} rotation={[-Math.PI / 3, 0, 0]} scale={1600}>
            <mesh geometry={nodes['01foxFinal_Material092_0'].geometry} material={materials['Material.092']} />
          </group>
          {/*<group position={[1209.05, 5803.94, 500.96]} rotation={[-Math.PI / 3, 0, 0]} scale={2000}>
            <mesh geometry={nodes['02catFinal_Material093_0'].geometry} material={materials['Material.093']} />
          </group>
          <group position={[-185.66, -6.98, 177.32]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['03duckFinal_Material118_0'].geometry} material={materials['Material.118']} />
          </group>
          <group position={[178.03, -6.99, -256.97]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['04bizonFinal_Material119_0'].geometry} material={materials['Material.119']} />
          </group>
          <group position={[-148.09, -7.63, -162.22]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['05deerFinal_Material120_0'].geometry} material={materials['Material.120']} />
          </group>
          <group position={[-473.6, -6.13, 154.42]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['06penguinFinal_Material121_0'].geometry} material={materials['Material.121']} />
          </group>
          <group position={[-370.78, 54.2, 161.08]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['07sharkFinal_Material090_0'].geometry} material={materials['Material.090']} />
          </group>
          <group position={[57.68, -4.99, -303.04]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['08bearFinal_Material123_0'].geometry} material={materials['Material.123']} />
          </group>
          <group position={[-271.89, -5.76, 173.24]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['11frogFinal_Material127_0'].geometry} material={materials['Material.127']} />
          </group>
          <group position={[339.4, -5.12, 143.8]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['12dogFinal_Material129_0'].geometry} material={materials['Material.129']} />
          </group>
          <group position={[-40.88, -5.97, 179.33]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['13cowFinal_Material130_0'].geometry} material={materials['Material.130']} />
          </group>
          <group position={[126.25, -5.28, 156.7]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['14dogFinal_Material131_0'].geometry} material={materials['Material.131']} />
          </group>
          <group position={[-296.4, -5.6, 169.29]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['15lizardFinal_Material132_0'].geometry} material={materials['Material.132']} />
          </group>
          <group position={[-104.76, -6.33, 160.14]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['10sheepFinal_Material088_0'].geometry} material={materials['Material.088']} />
          </group>
          <group position={[37.36, -5.17, 179.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['17horseFinal_Material089_0'].geometry} material={materials['Material.089']} />
          </group>
          <group position={[-235.62, 72.88, 158.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['24birdFinal_Material091_0'].geometry} material={materials['Material.091']} />
          </group>
          <group position={[-229.37, -6.15, 173.1]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['22smolchikenFinal_Material126_0'].geometry} material={materials['Material.126']} />
          </group>
          <group position={[-213.16, -6.37, 175.7]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['21chikenFinal_Material128_0'].geometry} material={materials['Material.128']} />
          </group>
          <group position={[176.73, -5.53, 170.3]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['19dogFinal_Material133_0'].geometry} material={materials['Material.133']} />
          </group>
          <group position={[227.68, -3.97, 171.4]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['20dogFinal_Material134_0'].geometry} material={materials['Material.134']} />
          </group>
          <group position={[275.14, -2.35, 170.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['25dogFinal_Material135_0'].geometry} material={materials['Material.135']} />
          </group>
          <group position={[301.2, -3.52, -165]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['18girafFinal_Material136_0'].geometry} material={materials['Material.136']} />
          </group>
          <group position={[-285.37, 81.79, 139.8]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['23smolbirdFinal_Material124_0'].geometry} material={materials['Material.124']} />
          </group>
          <group position={[-57.94, -8.87, -170.19]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['09deerFinal_Material138_0'].geometry} material={materials['Material.138']} />
          </group>
          <group position={[-248.8, -5.29, 162.39]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes['16rabbitFinal_Material137_0'].geometry} material={materials['Material.137']} />
          </group> */}
        </group>
      </group>
    </group>
  )
}
function Model3(props) {
    const { nodes, materials } = useGLTF('/person/scene.gltf')
    return (
      <group {...props} dispose={null}>
        <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3}>
          <mesh geometry={nodes.children_0.geometry} material={materials.child} />
        </group>
      </group>
    )
  }

// function Model4(props) {
//   const { nodes, materials } = useGLTF('/person/scene.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3}>
//         <mesh geometry={nodes.children_0.geometry} material={materials.child} />
//         <Canvas   id="personn" >
//             <Suspense fallback={null}>
//               <ambientLight />
//               <spotLight intensity={5} angle={0.1} penumbra={1} position={[500,500,500]} castShadow />
//               <Model3 />
//               <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
//           </Suspense> 
//           </Canvas>
//       </group>
//     </group>
//   )
// }

function Model8(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/badge/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="eeebe696fe144016b54f1646de5f3274fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                 <group name="Cylinder" position={[0,0,-80]} rotation={[0, 0, -1.97]} scale={[50, 50, 1]}>
                  <mesh name="Cylinder_Material023_0" geometry={nodes.Cylinder_Material023_0.geometry} material={materials['Material.023']} />
                  <mesh name="Cylinder_Material001_0" geometry={nodes.Cylinder_Material001_0.geometry} material={materials['Material.001']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

function Model9(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/badge/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="eeebe696fe144016b54f1646de5f3274fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Plane001"  position={[0,0,-50]} rotation={[0, 0.0, 0.0]}scale={22.69}>
                  <mesh name="Plane001_Material002_0" geometry={nodes.Plane001_Material002_0.geometry} material={materials['Material.002']} />
                  <mesh name="Plane001_Material023_0" geometry={nodes.Plane001_Material023_0.geometry} material={materials['Material.023']} />
                </group> 
                 
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

function Model10(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/badge/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="eeebe696fe144016b54f1646de5f3274fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Plane" position={[0,0,-50]} rotation={[0, 0.0, 0.0]} scale={20.98}>
                  <mesh name="Plane_Material015_0" geometry={nodes.Plane_Material015_0.geometry} material={materials['Material.015']} />
                  <mesh name="Plane_Material016_0" geometry={nodes.Plane_Material016_0.geometry} material={materials['Material.016']} />
                  <mesh name="Plane_Material004_0" geometry={nodes.Plane_Material004_0.geometry} material={materials['Material.004']} />
                </group>
               
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
function Model11(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/badge/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="eeebe696fe144016b54f1646de5f3274fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
      
                <group name="Plane002" position={[0,0,-50]} rotation={[0, 0.0, 0.0]} scale={29.98}>
                  <mesh name="Plane002_Material018_0" geometry={nodes.Plane002_Material018_0.geometry} material={materials['Material.018']} />
                  <mesh name="Plane002_Material023_0" geometry={nodes.Plane002_Material023_0.geometry} material={materials['Material.023']} />
                  <mesh name="Plane002_Material019_0" geometry={nodes.Plane002_Material019_0.geometry} material={materials['Material.019']} />
                </group>
     
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
function Model12(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/badge/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="eeebe696fe144016b54f1646de5f3274fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
              
                  <group name="Cylinder011" position={[0,0,-80]} rotation={[0, 0.0, 0.0]} scale={[26.99, 26.99, 3.93]}>
                  <mesh name="Cylinder011_Material017_0" geometry={nodes.Cylinder011_Material017_0.geometry} material={materials['Material.017']} />
                  <mesh name="Cylinder011_Material004_0" geometry={nodes.Cylinder011_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
function Model13(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/badge/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="eeebe696fe144016b54f1646de5f3274fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
          
                <group name="Cylinder013" position={[5,10,-80]} rotation={[0, -0.05, 0.37]} scale={[34.99, 34.99, 3.93]}>
                  <mesh name="Cylinder013_Material024_0" geometry={nodes.Cylinder013_Material024_0.geometry} material={materials['Material.024']} />
                  <mesh name="Cylinder013_Material003_0" geometry={nodes.Cylinder013_Material003_0.geometry} material={materials['Material.003']} />
                  <mesh name="Cylinder013_Material004_0" geometry={nodes.Cylinder013_Material004_0.geometry} material={materials['Material.004']} />
                </group>
              
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
function Model14(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/badge/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="eeebe696fe144016b54f1646de5f3274fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
              
                <group name="Cylinder008" position={[0,3,-80]} rotation={[0, -0.05, 0.8]}scale={[25.25, 25.25, 4.15]}>
                  <mesh name="Cylinder008_Material021_0" geometry={nodes.Cylinder008_Material021_0.geometry} material={materials['Material.021']} />
                  <mesh name="Cylinder008_Material022_0" geometry={nodes.Cylinder008_Material022_0.geometry} material={materials['Material.022']} />
                  <mesh name="Cylinder008_Material023_0" geometry={nodes.Cylinder008_Material023_0.geometry} material={materials['Material.023']} />
                  <mesh name="Cylinder008_Material020_0" geometry={nodes.Cylinder008_Material020_0.geometry} material={materials['Material.020']} />
                </group>
                
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
function Model15(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/badge/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="eeebe696fe144016b54f1646de5f3274fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
              
                  <group name="Plane021"  position={[0,0,-80]} rotation={[0, -0.05, 0.8]} scale={13.56}>
                  <mesh name="Plane021_Material018_0" geometry={nodes.Plane021_Material018_0.geometry} material={materials['Material.018']} />
                  <mesh name="Plane021_Material009_0" geometry={nodes.Plane021_Material009_0.geometry} material={materials['Material.009']} />
                  <mesh name="Plane021_Material008_0" geometry={nodes.Plane021_Material008_0.geometry} material={materials['Material.008']} />
                  <mesh name="Plane021_Material015_0" geometry={nodes.Plane021_Material015_0.geometry} material={materials['Material.015']} />
                  <mesh name="Plane021_Material010_0" geometry={nodes.Plane021_Material010_0.geometry} material={materials['Material.010']} />
                  <mesh name="Plane021_Material006_0" geometry={nodes.Plane021_Material006_0.geometry} material={materials['Material.006']} />
                  <mesh name="Plane021_Material011_0" geometry={nodes.Plane021_Material011_0.geometry} material={materials['Material.011']} />
                  <mesh name="Plane021_Material007_0" geometry={nodes.Plane021_Material007_0.geometry} material={materials['Material.007']} />
                  <mesh name="Plane021_Material019_0" geometry={nodes.Plane021_Material019_0.geometry} material={materials['Material.019']} />
                  <mesh name="Plane021_Material013_0" geometry={nodes.Plane021_Material013_0.geometry} material={materials['Material.013']} />
                  <mesh name="Plane021_Material004_0" geometry={nodes.Plane021_Material004_0.geometry} material={materials['Material.004']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

function Model16(props) {
  const { nodes, materials } = useGLTF('/badge2/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 3, 1.5]} scale={0.4}>
          <group rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.BadgeSeason4_Badge_LegendsDiamond_PBR_0.geometry} material={materials.Badge_LegendsDiamond_PBR} />
          </group>
        </group>
      </group>
    </group>
  )
}

function Model17(props) {
  const { nodes, materials } = useGLTF('/badge3/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.075}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.DefaultMaterial} />
      </group>
    </group>
  )
}



function Model18(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/badge4/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0,0,-4]}  rotation={[-Math.PI / 2, 0, 0]} scale={1.7}>
          <group name="29a0177e54924335988f7c35f7183ffbfbx" rotation={[Math.PI / 7, 0, 0]} scale={0.025}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sphere" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Sphere_Material001_0" geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} />
                </group>
                <group name="Sphere001" rotation={[-Math.PI / 2, 0, -1.07]} scale={100}>
                  <mesh name="Sphere001_Material002_0" geometry={nodes.Sphere001_Material002_0.geometry} material={materials['Material.002']} />
                </group>
                <group name="Sun" position={[-822.36, 294.31, 360.56]} rotation={[-1.73, 1.34, 2.48]} scale={100}>
                  <group name="Object_11" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_12" />
                  </group>
                </group>
                <group name="Camera" position={[-340.34, 76.73, 63.77]} rotation={[0, 0.2, -0.21]} scale={100}>
                  <group name="Object_9" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

function Model19(props) {
  const { nodes, materials } = useGLTF('/badge5/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 1]} rotation={[-0.01, -0.01, 0]} scale={46}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_6.geometry} material={materials.Police_Badge} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Police_Badge} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.Police_Badge} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.Police_Badge} />
        </group>
      </group>
    </group>
  )
}

function Model20(props) {
  const { nodes, materials } = useGLTF('/lock/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}  >
        <group position={[0, -0.9, -2.4]} rotation={[Math.PI / 2, 0.02, 0]} scale={0.13} >
          <group position={[-0.3, 0, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['Box001_01_-_Default_0'].geometry} material={materials['01_-_Default']} />
          </group>
          <group position={[-5.47, 34.38, 0.33]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['Cylinder001_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
          </group>
          <group position={[0.15, 11.19, 0.85]}>
            <mesh geometry={nodes['Plane001_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
          </group>
        </group>
      </group>
    </group>
  )
}

function Model21(props) {
  const { nodes, materials } = useGLTF('/plus/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -15, -70]} rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
            <mesh geometry={nodes.Box001__0.geometry} material={materials.RootNode} />
          </group>
        </group>
      </group>
    </group>
  )
}

function ParentMainPage() {

  let relation = {
    parent : 1,
    child : [1,0,0,0,0,0,0,0,0,0]
  }
  
  return (
    // <BrowserRouter>
    //   <div className="ChildMainPage">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <div>

    <div className='Earth2'>
      
  
        <div className= "peoplelist"  >
            <div className = "people">
              { relation['child'][0] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person1" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][0] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person1" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model21 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][1] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person2" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][1] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person2" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model21 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][2] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person3" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][2] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person3" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model21 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][3] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person4" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][3] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person4" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model21 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][4] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person5" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][4] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person5" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model21 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][5] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person6" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][5] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person6" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model21 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][6] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person7" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][6] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person7" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model21 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][7] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person8" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][7] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person8" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model21 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][8] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person9" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][8] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person9" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model21 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][9] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person10" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][9] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person10" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Model21 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
            </div>
            
  
            
        </div>
        
        <div className = "canvasEarth">
            <Canvas id="person" >
                <Suspense fallback={null}>
                <ambientLight />
                <spotLight intensity={5} angle={0.1} penumbra={1} position={[10,15,10]} castShadow />        
                <Model />
                <Model2 />
                <OrbitControls enablePan={true} enableZoom={true} rotateSpeed = {0.2} enableRotate={true} />
                </Suspense> 
            </Canvas>
        </div>
      
    </div>
    </div>
  );
}

export default ParentMainPage;

