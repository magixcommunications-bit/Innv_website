import React, { useState } from 'react'
import './style.css'
import { Dialog, Transition } from '@headlessui/react'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, A11y } from 'swiper'
import { carouselList } from './static'
import 'swiper/css'
import 'swiper/css/pagination'
import YoutubeIcon from '../../assets/youtube.png'
import CerebralVideo from '../../assets/clinicalPage/Cerebral Endovascular Coiling Procedure.mp4'
import CereBralThumbnail from '../../assets/clinicalPage/Cerebal_thumbnail.png'

const Carasouel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [subTabActiveIndex, setSubTabActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [videoIndex, setVideoIndex] = useState<number | undefined>(undefined)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(
    null,
  )

  const handleTabClick = (update: number) => {
    setActiveIndex(update)
    setSubTabActiveIndex(0)
    setSelectedVideoIndex(update)
  }
  const handleSubTabClick = (update: number) => {
    setSubTabActiveIndex(update)
    setSelectedVideoIndex(update)
  }

  const handleModalReveal = (index: number) => {
    console.log('index', index)
    setSelectedVideoIndex(index)
    setIsOpen(true)
  }

  const carouselList = [
    {
      tab: 'Cardiovascular Interventions',
      subtab: [
        {
          title: 'Coronary Angiographic Views',
          data: [
            {
              content: 'AP Caudal - Left Coronary System',
              desc: 'The AP Caudal view is widely recognized as an essential projection for the Left Coronary System (LCS). It offers optimal visualization of the bifurcation of the Left Main (LM), Left Anterior Descending (LAD), and Left Circumflex (LCx) arteries, as well as their proximal and mid-segments. This view is particularly valuable in assessing lesions and guiding precise stent placements while minimizing vessel overlap. However, the AP Caudal view may partially obscure certain distal branches, such as the diagonals, requiring complementary views for a comprehensive assessment. Our cathlabs are equipped with advanced imaging technology, delivering superior image quality for detailed anatomical visualization. The flexible angles and high-performance imaging capabilities accommodate patients of varying body types, ensuring accurate diagnostics and confident decision-making for complex procedures. These features collectively enhance patient care and procedural outcomes.',
              videoLink: 'https://www.youtube-nocookie.com/embed/yluUDZ7NSEc',
              thumbnail: 'https://www.youtube-nocookie.com/embed/yluUDZ7NSEc',
            },
            {
              content: 'AP Cranial - Left Coronary System',
              desc: 'The AP Cranial view is a crucial projection in the evaluation of the Left Coronary System (LCS). It provides optimal visualization of the Left Main (LM), proximal Left Anterior Descending (LAD), and its diagonal branches, with minimal vessel overlap. This view is especially useful for assessing lesions in the mid and distal LAD segments and the origins of the diagonals. While this view enhances the clarity of the LAD, it may foreshorten the Left Circumflex (LCx) artery, necessitating alternative views for its comprehensive evaluation. Our cathlabs feature advanced imaging technology that delivers exceptional image quality, enabling precise anatomical visualization. The versatile imaging angles and capabilities support clinicians in achieving superior diagnostic accuracy, even in complex cases. This ensures enhanced patient care and improved procedural outcomes.',
              videoLink: 'https://www.youtube-nocookie.com/embed/9U9wiFxhYqY',
              thumbnail: 'https://www.youtube-nocookie.com/embed/9U9wiFxhYqY',
            },
            {
              content: 'RAO Caudal - Left Coronary System',
              desc: 'Presenting a series of RAO Caudal Images captured on our Innvolution Cathlabs. The RAO Caudal view is considered as the best view for the initial injection of the left system. The left main coronary artery, the ostium and proximal segment of the left anterior descending artery, and the circumflex and obtuse marginal branches are optimally visualized. RAO Caudal view is also the best overall view to assess the myocardial perfusion or blush of the left circumflex territory. However, this view obscures the origins of the diagonals and foreshortens the middle and distal segments of the left anterior descending artery. Our Cathlabs stand out for delivering unparalleled image quality, ensuring that healthcare professionals have access to highly detailed anatomical and clinical information. The versatile angles offered by our equipment empower medical practitioners to capture comprehensive views, accommodating patients with different weights. This capability is crucial in enhancing diagnostic precision and facilitating optimal decision-making in various medical procedures. The advanced imaging technology within our cathlabs ensures that healthcare providers can confidently navigate a wide range of cases, contributing to improved patient care and outcomes.',
              videoLink: 'https://www.youtube-nocookie.com/embed/jt3z7Ulh8Ko',
              thumbnail: 'https://www.youtube-nocookie.com/embed/jt3z7Ulh8Ko',
            },
            {
              content: 'LAO Caudal - Left Coronary System',
              desc: `The LAO Caudal view, often referred to as the "Spider View" due to the distinctive appearance of the coronary tree, is a critical projection for imaging the Left Coronary System (LCS). It provides exceptional visualization of the Left Main (LM), Left Anterior Descending (LAD), and Left Circumflex (LCx) arteries, making it indispensable for evaluating bifurcation lesions, ostial involvement, and guiding precise stent placements. This view is particularly useful for assessing the proximal and mid-segments of the LCx and LAD. However, it may foreshorten distal branches like the obtuse marginal arteries, requiring additional angles for a complete evaluation. Our Innvolution Cathlabs ensure superior image quality and unparalleled anatomical clarity, supporting clinicians in detailed assessments. With versatile imaging angles and advanced technology, these cathlabs enable optimal decision-making and improved patient outcomes, even in complex coronary cases.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/BH9MhW7CaDU',
              thumbnail: 'https://www.youtube-nocookie.com/embed/BH9MhW7CaDU',
            },
            {
              content: 'LAO Cranial - Left Coronary System',
              desc: `The LAO Cranial view is a vital projection in imaging the Left Coronary System (LCS). It provides excellent visualization of the Left Main (LM), proximal and mid Left Anterior Descending (LAD), and diagonal branches, making it an ideal choice for evaluating lesions and planning stent deployment in these regions. This view also highlights the relationship of the LAD to the diagonal branches with minimal vessel overlap. However, the LAO Cranial view may partially obscure the Left Circumflex (LCx) and its branches, which can be addressed by using complementary projections. Our Innvolution Cathlabs deliver exceptional image clarity with advanced technology, ensuring precise anatomical evaluation. The flexible imaging angles and superior visualization capabilities facilitate accurate diagnostics and treatment planning, leading to improved outcomes and enhanced patient care.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/Gc2uSJ08M74',
              thumbnail: 'https://www.youtube-nocookie.com/embed/Gc2uSJ08M74',
            },
            {
              content: 'RCA - Right Coronary Artery',
              desc: 'The LAO view is critical for evaluating the right coronary system as it provides excellent visualization of the proximal, mid, and distal segments of the RCA. This projection clearly defines the vessel course, its branches, and any lesions or anomalies. It is particularly helpful in assessing the posterior descending artery and posterolateral branches. However, it may foreshorten the RCA in certain cases, requiring complementary views for complete evaluation.',
              videoLink: 'https://www.youtube-nocookie.com/embed/qvjx350mHBc',
              thumbnail: 'https://www.youtube-nocookie.com/embed/qvjx350mHBc',
            },
          ],
        },
        {
          title: 'PCI Procedures',
          data: [
            {
              content: 'Thrombus Aspiration',
              desc: "A patient presented with severe chest pain, shortness of breath, sweating, and nausea - classic signs of an acute myocardial infarction. Coronary angiography confirmed a 100% occlusion in the left anterior descending (LAD) artery, highlighting the need for urgent intervention. Thrombus aspiration was carried out to remove the clot from the left anterior descending (LAD) artery, with final angiography revealing TIMI III flow, indicating restored blood flow. The successful thrombus aspiration procedure was greatly facilitated by the utilization of Innvolution's Premier Elite Cath Lab. This cutting-edge fluoroscopy system delivered high-resolution imaging, enabling precise visualization of the arterial thrombus and its spatial relationship with surrounding structures. This real-time guidance was pivotal in accurately removing the clot, restoring optimal blood flow and enhancing procedural efficacy.",
              videoLink: 'https://www.youtube-nocookie.com/embed/R1FqmQER9Hk',
              thumbnail: 'https://www.youtube-nocookie.com/embed/R1FqmQER9Hk',
            },
            {
              content: 'LAD trearted with ROTA Technology',
              desc: 'A Complex scenario involving an 80-year-old patient with a severely calcified left anterior descending artery (LAD) was treated using ROTA Technology on our state-of-the-art Pinnacle Agile Cath lab. The calcified plaque was modified by using five rotational atherectomy passes using a 1.5-mm burr, with shorter runs. The LAD provision stenting was carried out successfully with good angiographic outcomes and Distal TIMI III flow was achieved. Pinnacle Agile Cath lab embodies cutting-edge technology, presenting an intuitive platform for a wide range of interventional procedures. It excels in delivering superior image quality while minimizing radiation exposure. Moreover, its capacity to achieve desired C-arm angulations enhances patient outcomes to the highest degree possible. ',
              videoLink: 'https://www.youtube-nocookie.com/embed/ko0QLZ47eWI',
              thumbnail: 'https://www.youtube-nocookie.com/embed/ko0QLZ47eWI',
            },
            {
              content: 'Non ST Elevation Myocardial Infarction',
              desc: "A patient presented with chest discomfort and elevated cardiac biomarkers, leading to a diagnosis of Non-ST-Elevation Myocardial Infarction (NSTEMI). Coronary angiography showed 90-95% stenosis in the ostio-proximal Left Anterior Descending (LAD) artery and 50% stenosis in the proximal LAD. The patient underwent a successful Percutaneous Coronary Intervention (PCI), with a stent deployed from the Left Main Coronary Artery (LMCA) to the ostio-proximal LAD artery via a transradial approach, with no complications. Pre- and post-dilatation with a non-compliant balloon ensured optimal stent expansion and apposition, resulting in TIMI III flow, indicating good restoration of blood flow. The PCI, performed in Innvolution’s Premier Elite cath lab, successfully treated the critical coronary blockage, enhancing myocardial perfusion and lowering the risk of future ischemic events. The Premier Elite Cathlab's advanced system was key to ensuring procedural precision, offering real-time, high-resolution fluoroscopic imaging and excellent maneuverability.",
              videoLink: 'https://www.youtube-nocookie.com/embed/8Iz12OS9S9I',
              thumbnail: 'https://www.youtube-nocookie.com/embed/8Iz12OS9S9I',
            },
            {
              content: 'Double Vessel Disease: LCx and RCA',
              desc: 'A patient diagnosed with Ischemic Heart Disease (IHD) and a history of Inferior Wall Myocardial Infarction (IWMI). Coronary Angiography (CAG) revealed 90% stenosis in the distal Left Circumflex artery (LCx) and 70% stenosis in the mid-Right Coronary Artery (RCA), with the Left Anterior Descending artery (LAD), classified as a type III vessel, exhibits ostio-proximal luminal irregularities. Diagnosed with double vessel disease (DVD), the patient underwent Percutaneous Transluminal Coronary Angioplasty (PTCA) with stenting. The PTCA was performed via the right radial artery, starting with pre-dilation of the LCx. The first stent was deployed in the mid-segment, followed by the second stent in the distal segment, and post-dilation was conducted to ensure optimal expansion. The RCA mid-segment was treated in a similar manner. Angiography confirmed well-expanded stents with improved coronary flow. Innvolution’s Premier Elite Cathlab supported the procedure, providing advanced real-time fluoroscopic imaging and superior image quality, facilitating the precise execution of the PTCA to restore blood flow. This approach ultimately enhanced patient outcomes and reduced the risk of future ischemic events.',
              videoLink: 'https://www.youtube-nocookie.com/embed/YGcy4wZv2uw',
              thumbnail: 'https://www.youtube-nocookie.com/embed/YGcy4wZv2uw',
            },
            {
              content: 'Rotablator Technique',
              desc: "A 65-year-old male patient presented with a diagnosis of coronary artery disease (CAD), acute coronary syndrome (ACS), diabetes mellitus (DM), hypertension (HTN), and a heavily calcified left anterior descending artery (LAD). The patient’s ejection fraction (EF) was measured at 45%. Procedure details : The left main coronary artery (LMCA) was engaged using an 3.0 6F guiding catheter. The lesion was initially crossed with a Rota guidewire. ROTA ablation was performed with five runs using a 1.5 mm ROTA Burr to modify the calcified lesion. The lesion in the ostial to mid LAD was pre-dilated using a 2.5 x 12 mm balloon at 14-16 atm pressure for 10 seconds. A stent measuring 2.75 x 24 mm was deployed in the ostial to mid LAD at 12 atm pressure for 10 seconds. Post-dilation was performed within the stent using a 3.0 x 10 mm balloon at 16-18 atm pressure for 10 seconds. The final angiogram showed excellent end results, indicating successful revascularization of the calcified LAD. This case showcases the effective use of the ROTABLATOR (ROTA) technique with Innvolution's Premier Cathlab in treating heavily calcified coronary lesions. The procedure involved meticulous planning and execution, employing advanced interventional tools and techniques to achieve optimal results.",
              videoLink: 'https://www.youtube-nocookie.com/embed/H7j3VIP4D0o',
              thumbnail: 'https://www.youtube-nocookie.com/embed/H7j3VIP4D0o',
            },
            {
              content: 'PCI for LAD occlusion',
              desc: 'A 72-year-old male presented with an Anterior Wall Myocardial Infarction (AWMI) and underwent thrombolysis. Despite this treatment, the patient continued to experience angina. The following day, angiography revealed a 100% occlusion in the Left Anterior Descending (LAD) artery, prompting a plan for Percutaneous Transluminal Coronary Angioplasty (PTCA) to the LAD. During pre-dilation, the balloon did not expand due to an eccentric calcium nodule, so a cutting balloon was used instead. Post-dilation angiography showed dissection, and the patient’s blood pressure dropped. The doctor promptly deployed a stent, followed by post-dilation with the balloon, successfully sealing the dissection. The final result was excellent, and the patient remained stable.',
              videoLink: 'https://www.youtube-nocookie.com/embed/OY0CCISTpl4',
              thumbnail: 'https://www.youtube-nocookie.com/embed/OY0CCISTpl4',
            },
            {
              content: 'Bifurcation Stent Cine',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/zK2uUVGeoOs',
              thumbnail: 'https://www.youtube-nocookie.com/embed/zK2uUVGeoOs',
            },
            {
              content: 'Stent Deployment',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/lOW-ov0mJfg',
              thumbnail: 'https://www.youtube-nocookie.com/embed/lOW-ov0mJfg',
            },
            {
              content: 'Single Vessel Disease',
              desc: 'A patient weighing over 90 kg with Ischemic Heart Disease (IHD), Acute Coronary Syndrome (ACS), and Anterolateral Wall Myocardial Infarction (AWMI) underwent an emergency coronary angiogram. The coronary profile revealed Type III LAD with 70% stenosis in the proximal LAD and 90-99% stenosis in the mid to distal LAD, with other vessels being normal or mildly diseased. The final impression was CAD with single-vessel disease. Primary coronary angioplasty was performed via the right radial approach. The lesion was crossed with a PTCA wire and predilated. Stenting was done in the LAD with drug-eluting stents, and post-stent re-dilation was carried out with non-compliant balloons. TIMI III flow was achieved, confirming the success of the procedure with stenting to the LAD using three stents. Innvolution’s Premier Elite Cath Lab, equipped with cutting-edge technology and staffed by skilled professionals, played a crucial role in the success of this procedure. The superior imaging capabilities allowed precise visualization, facilitating accurate lesion assessment and optimal stent placement. #innvolution #healthcare #heart',
              videoLink: 'https://www.youtube-nocookie.com/embed/NKYWP8A3_D0',
              thumbnail: 'https://www.youtube-nocookie.com/embed/NKYWP8A3_D0',
            },
            {
              content: 'Percutaneous Coronary Intervention to LCx and OM',
              desc: 'The patient, diagnosed with Ischemic Heart Disease (IHD), Acute Coronary Syndrome (ACS), and Non-ST Elevation Myocardial Infarction (NSTEMI), initially underwent a selective coronary angiogram. Angiography revealed the LCx with proximal ectasia, distal stenosis of 30-40%, and significant ostioproximal OM stenosis (70-80%). The LAD and its diagonal branch exhibited ectasia and diffuse disease, respectively. Coronary angioplasty under OCT guidance was performed via the right femoral approach. The proximal OM lesion was crossed with a PTCA wire, predilated with a balloon, and imaged using OCT, confirming significant stenosis. A drug-eluting stent was deployed, and post-dilation was performed to optimize the outcome. For the distal LCx lesion post-bifurcation, a kissing balloon technique was used, followed by stent deployment and further post-dilation. Post-procedure OCT confirmed well-expanded stent struts with TIMI III flow achieved. Innvolution’s Premier Elite Cath Lab facilitated precise OCT guidance procedure, enabling accurate lesion assessment, optimal stent deployment, and detailed post-procedure evaluation. High-resolution imaging confirmed no edge dissection or malapposition, achieving TIMI III flow restoration. Its state-of-the-art technology was pivotal in the successful PCI to LCx and OM without complications, optimizing patient outcomes.',
              videoLink: 'https://www.youtube-nocookie.com/embed/IUhVU_K2WHU',
              thumbnail: 'https://www.youtube-nocookie.com/embed/IUhVU_K2WHU',
            },
            {
              content: 'Cases performed in Pinnacle Agile',
              desc: 'We are pleased to introduce a series of angiography cases involving patients with varying body profiles, encompassing weights ranging from 95kg to 118kg. These procedures were expertly carried out on our cutting-edge Cath Labs, the Premier Select and Pinnacle Agile. The medical team supervising these cases expressed significant contentment with the outstanding image quality achieved. Notably, this exceptional imaging clarity was maintained with minimal radiation exposure, emphasizing our unwavering commitment to maintaining the highest healthcare standards.',
              videoLink: 'https://www.youtube-nocookie.com/embed/j_0mxSuIPvw',
              thumbnail: 'https://www.youtube-nocookie.com/embed/j_0mxSuIPvw',
            },
            {
              content: 'Cases performed in Pinnacle Pro',
              desc: "The Pinnacle Pro provides the lowest radiation dose while maintaining superior image quality, ensuring patient safety without compromising diagnostic accuracy. Our cutting-edge ASPIRE technology enhances imaging capabilities, delivering crystal-clear images for precise diagnostics and treatment. Experience unparalleled image resolution with 1K x 1K clarity. The precision and efficiency of the Pinnacle Pro system elevate the quality of medical procedures, showcasing Innvolution's commitment to innovation and delivering superior patient care.",
              videoLink: 'https://www.youtube-nocookie.com/embed/LesB0Q01U1E',
              thumbnail: 'https://www.youtube-nocookie.com/embed/LesB0Q01U1E',
            },
          ],
        },
        {
          title: 'Other Procedures',
          data: [
            {
              content: 'EP Study',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/h3nh7CqXUpI',
              thumbnail: 'https://www.youtube-nocookie.com/embed/h3nh7CqXUpI',
            },
            {
              content: 'Pacemaker Implantation',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/VI7N6oUXG8w',
              thumbnail: 'https://www.youtube-nocookie.com/embed/VI7N6oUXG8w',
            },
            {
              content: 'Dual Chamber PPI',
              desc: "A successful Dual Chamber PPI procedure was recently performed on a 48-year-old female with complete heart blockage in our state-of-the-art Premier Elite Cathlab. Our Premier Cathlab's unique +/- 120-degree gantry movement offers unparalleled space optimization, making the implantation of arrhythmia-related devices remarkably efficient. Pacemaker insertion is a groundbreaking procedure that plays a vital role in regulating abnormal heart rhythms, greatly improving the quality of life for individuals with cardiac conditions. During this procedure, a small device is surgically placed beneath the skin near the collarbone. This device emits electrical signals, ensuring the heart maintains a steady and healthy rhythm.",
              videoLink: 'https://www.youtube-nocookie.com/embed/Isx3KMkrkTY',
              thumbnail: 'https://www.youtube-nocookie.com/embed/Isx3KMkrkTY',
            },
            {
              content: 'Dual Chamber ICD',
              desc: "Patient diagnosed with hypertrophic obstructive cardiomyopathy (HOCM) with obstructive left ventricular outflow tract (LVOT) obstruction and hypertension (HTN). This procedure involved accessing the left axillary vein and creating a pre-pectoral pocket in the left infraclavicular region. With meticulous precision, a dual-chamber ICD with a pulse generator was successfully implanted. Active fixation leads were strategically placed at the RV apical septum and the right atrial appendage, ensuring stability and optimal functionality. The successful implantation procedure was greatly facilitated by the utilization of the Innvolution's Premier Elite Cathlab. This cutting-edge fluoroscopy system offered high-resolution imaging capabilities, allowing for precise visualization of anatomical structures and lead positioning within the heart chambers.",
              videoLink: 'https://www.youtube-nocookie.com/embed/25W8YZneQFw',
              thumbnail: 'https://www.youtube-nocookie.com/embed/25W8YZneQFw',
            },
            {
              content: 'CRT-D Implantation',
              desc: 'A 62-year-old male with dilated cardiomyopathy (LVEF 25-30%) and LBBB underwent CRT-D implantation. The presence of a persistent Left Superior Vena Cava (LSVC) posed significant challenges, particularly in engaging the posterolateral vein. The coronary sinus (CS) lead was ultimately placed in the lateral vein, while the right ventricular (RV) lead required a complex 360-degree maneuver to achieve proper placement. Despite these obstacles, the procedure was successful, resulting in QRS narrowing and stable biventricular pacing.',
              videoLink: 'https://www.youtube-nocookie.com/embed/5IzAG4-nJGU',
              thumbnail: 'https://www.youtube-nocookie.com/embed/5IzAG4-nJGU',
            },
            {
              content: 'Permanent Pacemaker Implantation',
              desc: "A patient presented with high-grade AV block and LV dysfunction, requiring comprehensive cardiac evaluation and intervention. A coronary angiogram was performed via the right radial artery, revealing normal coronary anatomy with no significant lesions in any major arteries. These findings effectively ruled out coronary artery disease as the underlying cause of the AV block. Following the CAG, a permanent pacemaker was implanted to manage the complete heart block. A dual-chamber pacemaker was inserted via the left subclavian vein, with the pulse generator positioned in an infraclavicular, pre-pectoral pocket. Equipped with atrial and ventricular bipolar leads, the device provided reliable pacing support, effectively addressing the patient's conduction defect and preventing future bradycardia-related complications. Innvolution’s Premier Elite Cath Lab provided real-time fluoroscopic guidance and projection flexibility for creating the infraclavicular pocket for the dual-chamber pacemaker. The 3MHU X-ray tube capacity played a crucial role in achieving optimal performance by reducing scatter radiation and operating efficiently at low doses ensuring successful implantation, and enhanced patient safety and comfort throughout the procedure.",
              videoLink: 'https://www.youtube-nocookie.com/embed/9yGrcF_FM3A',
              thumbnail: 'https://www.youtube-nocookie.com/embed/9yGrcF_FM3A',
            },
          ],
        },
        {
          title: 'Obese Patients',
          data: [
            {
              content: 'Patient weight 118 kg',
              desc: 'We are pleased to present an angiography case involving a patient weighing 118kg. The procedure was expertly performed on our advanced Premier Select Cathlab. The medical team expressed high satisfaction with the exceptional image quality achieved while ensuring minimal radiation exposure, underscoring our commitment to superior healthcare standards.',
              videoLink: 'https://www.youtube-nocookie.com/embed/JWF5mXrbFsA',
              thumbnail: 'https://www.youtube-nocookie.com/embed/JWF5mXrbFsA',
              videoId: 'JWF5mXrbFsA',
            },
            {
              content: 'Patient weight from 95 kg to 118 kg',
              desc: 'We are pleased to introduce a series of angiography cases involving patients with varying body profiles, encompassing weights ranging from 95kg to 118kg. These procedures were expertly carried out on our cutting-edge Cath Labs, the Premier Select and Pinnacle Agile. The medical team supervising these cases expressed significant contentment with the outstanding image quality achieved. Notably, this exceptional imaging clarity was maintained with minimal radiation exposure, emphasizing our unwavering commitment to maintaining the highest healthcare standards.',
              videoLink: 'https://youtube.com/embed/j_0mxSuIPvw',
              videoId: 'j_0mxSuIPvw',
            },
            // {
            //   // content: 'RAO Cranial - Right Coronary System',
            //   content: 'Patient weight 95 kg',
            //   desc: 'The RAO Cranial view is a crucial projection for assessing the right coronary artery, providing optimal visualization of the mid and distal RCA, including the posterior descending artery and posterolateral branches. This angulation minimizes vessel overlap and enhances the evaluation of stenotic lesions, tortuosity, and bifurcations. It is particularly useful for precise guidewire navigation and stent placement in the distal RCA. However, this view may foreshorten the proximal RCA, necessitating additional projections for comprehensive assessment.',
            //   videoLink: 'https://www.youtube-nocookie.com/embed/lkBeN1EQprw',
            //   thumbnail: 'https://www.youtube-nocookie.com/embed/lkBeN1EQprw',
            // },
            // {
            //   content: 'Aneurysm Coiling Procedure',
            //   desc: "A 50-year-old patient presented with Acute Subarachnoid Hemorrhage (SAH) and underwent a 4-Vessel Digital Subtraction Angiography (DSA) for detailed diagnostic evaluation. The procedure was performed via a right femoral artery approach, allowing selective cannulation of the Right Common Carotid Artery (CCA), Left Internal Carotid Artery (ICA), and Bilateral Vertebral Arteries. Imaging confirmed a fusiform aneurysm at the junction of the Right Vertebral Artery and the Posterior Inferior Cerebellar Artery (PICA), while all other intracranial vessels appeared normal. The patient underwent transcarotid endovascular stent-assisted coiling via a right femoral approach under local anesthesia. The right vertebral artery was accessed with a long sheath over a guidewire, and the aneurysm was cannulated using microcatheters. A stent was deployed across the aneurysm neck, followed by coiling to ensure complete exclusion. Post-procedure imaging confirmed total aneurysm occlusion with preserved normal flow in all distal branches, ensuring successful vascular integrity. Innvolution's Premier Elite Cath Lab helped in delivering advanced imaging capabilities that ensured optimal visualization of the aneurysm and surrounding vascular structures. The system’s real-time fluoroscopy, combined with the innovative ASPIRE technology, significantly reduced radiation exposure for both the patient and staff, prioritizing safety while maintaining exceptional image clarity throughout the procedure.",
            //   videoLink: 'https://via.placeholder.com/400',
            //   thumbnail: 'https://via.placeholder.com/400',
            // },
          ],
        },
      ],
    },
    {
      tab: 'Structural Heart Disease Interventions',
      subtab: [],
      data: [
        {
          content: 'TAVI case',
          desc: 'The patient presented with exertional dyspnea, chest pain, and fatigue. Echocardiography revealed severe aortic stenosis. Given the complexity of comorbid diabetes mellitus, transcatheter aortic valve implantation (TAVI) was recommended. The transcatheter valve was advanced, positioned in the aortic annulus, and expanded, effectively treating the aortic stenosis. Transient heart conduction abnormalities were promptly managed. The patient experienced significant improvement in symptoms post-TAVI. Follow-up echocardiography showed optimal valve function. Innvolution’s Premier Elite Cathlab was crucial in providing precise fluoroscopic guidance and visualization during catheter placement and valve deployment. Integrated hemodynamic monitoring tools enabled real-time assessment of aortic pressure, heart rate, and oxygen saturation, ensuring procedural accuracy and patient well-being.',
          videoLink: 'https://www.youtube-nocookie.com/embed/FPdChssIUp0',
          thumbnail: 'https://www.youtube-nocookie.com/embed/FPdChssIUp0',
        },
        {
          content: 'TMVR case',
          desc: `Transcatheter Mitral Valve Replacement (Valve in Valve) Procedure was successfully performed on our Premier Elite Cath lab for a 60-year-old patient suffering from Mitral Prosthetic Valve Dysfunction & Severe Valvular Mitral Restenosis. The Valve was successfully well deployed, and Hemostasis achieved. TMVR stands for "Transcatheter Mitral Valve Replacement." It is a medical procedure used to treat patients with malfunctioning or diseased mitral heart valves. In TMVR, a prosthetic (artificial) valve is inserted into the heart through a catheter, typically via a vein in the groin, without the need for open-heart surgery. This procedure is often chosen for patients who are at higher risk for traditional open-heart surgery or for those who may benefit from a less invasive treatment option. TMVR is a minimally invasive approach that can help improve the function of the mitral valve and alleviate related heart conditions.`,
          videoLink: 'https://www.youtube-nocookie.com/embed/5-ZEWxb72iA',
          thumbnail: 'https://www.youtube-nocookie.com/embed/5-ZEWxb72iA',
        },
        // {
        //   content: 'Balloon Mitral Valvulopasty',
        //   desc: 'Balloon mitral valvuloplasty (BMV) is a minimally invasive procedure used to treat severe mitral stenosis (narrowing of the left ventricle valve), either alongside medications or as a bridging procedure while awaiting further heart surgery. The procedure involves inserting a small, flexible tube called a catheter into the vessel through your groin. A balloon catheter is then threaded across the mitral valve and inflated briefly for a few seconds, stretching the mitral valve. This process allows the mitral valve to move more freely, improving blood flow through your heart and the rest of your body. Balloon Mitral Valvotomy Procedure Performed on Premier Elite Cath lab: Patient was diagnosed with rheumatic heart disease leading to severe mitral stenosis. Echocardiography revealed severe mitral stenosis with a valve area of 0.8 cm². A successful BMV was performed with a 26-mm balloon. Post-BMV echocardiography showed an increased valve area. This procedure resulted in significant clinical improvement, highlighting the efficacy of balloon mitral valvotomy in managing severe mitral stenosis. Providing a minimally invasive procedural strategy for patients with severe mitral valve stenosis, this case illustrates how the Innvolution’s #PremierElite Cath lab system can improve the accuracy and safety of Structural Heart Disease procedures.',
        //   videoLink: 'https://www.youtube-nocookie.com/embed/0eEEhtOe_5Q',
        //   thumbnail: 'https://www.youtube-nocookie.com/embed/0eEEhtOe_5Q',
        // },
        // {
        //   content: 'Patent Ductus Arteriosus',
        //   desc: '',
        //   videoLink: 'https://via.placeholder.com/400',
        //   thumbnail: 'https://via.placeholder.com/400',
        // },
        {
          content: 'Balloon Mitral Valvulopasty on Premier Elite',
          desc: `Presenting a BMV (Balloon Mitral Valvuloplasty) procedure successfully performed in our Premier Elite Cathlab. Balloon mitral valvuloplasty (BMV) is a minimally invasive procedure used to treat severe mitral stenosis (narrowing of the left ventricle valve), either alongside medications or as a bridging procedure while awaiting further heart surgery. The procedure involves inserting a small, flexible tube called a catheter into the vessel through your groin. A balloon catheter is then threaded across the mitral valve and inflated briefly for a few seconds, stretching the mitral valve. This process allows the mitral valve to move more freely, improving blood flow through your heart and the rest of your body.`,
          videoLink: 'https://www.youtube-nocookie.com/embed/0eEEhtOe_5Q',
          thumbnail: 'https://www.youtube-nocookie.com/embed/0eEEhtOe_5Q',
        },
        {
          content: 'Atrial Septal Defect Device Closure',
          desc: `A 3-year-old child was diagnosed with an Ostium secundum Atrial Septal Defect. The ASD device closure procedure was successfully performed using a 16 mm Amplatzer device in our Premier Elite Cathlab. Post-device deployment, an echocardiogram revealed the optimal positioning of the device with no residual shunting, and the patient remained in stable hemodynamic condition. Our Premier Elite Cathlab, equipped with cutting-edge technology and staffed by skilled medical professionals, played a crucial role in ensuring the success of this procedure. Atrial septal defect (ASD) is a congenital heart defect characterized by an abnormal opening in the atrial septum, the heart's upper chambers' wall. This condition is typically present at birth and is among the most common congenital heart defects. The size and location of the defect can vary, ranging from small to large openings. The procedure involves the use of a device to seal the hole, a patch to cover it, ensuring improved cardiac function and overall health.`,
          videoLink: 'https://www.youtube-nocookie.com/embed/KdQT1H8H3Ho',
          thumbnail: 'https://www.youtube-nocookie.com/embed/KdQT1H8H3Ho',
        },
        {
          content: 'Atrial Septal Defect Closure',
          desc: `A 15-year-old girl was diagnosed with an atrial septal defect (ASD). The ASD Closure procedure was effectively carried out in our Innvolution Cath Lab, restoring the young patient's cardiac functions to a healthy state with a fully operational heart. Both the physician and technician expressed satisfaction with the achieved image quality at a reduced radiation dose and the system's user-friendly design.`,
          videoLink: 'https://www.youtube-nocookie.com/embed/bT45zduDSOw',
          thumbnail: 'https://www.youtube-nocookie.com/embed/bT45zduDSOw',
        },
        {
          content: 'Atrial Septal Defect in Premier Elite',
          desc: `A 23-year-old patient was diagnosed with an ostium secundum atrial septal defect (ASD) with a left-to-right shunt on a 2D echo, showing normal pulmonary venous drainage and normal LV/RV function. To prevent potential complications, a transcatheter ASD closure was planned. The procedure was performed under sedation and local anesthesia, with a catheter introduced through the right femoral vein. Precise placement of the ASD occluder device was guided using fluoroscopy and transthoracic echocardiography (TTE), ensuring optimal positioning across the defect. Post-procedure imaging confirmed the stability of the device, with no residual flow or significant regurgitation, indicating a successful closure. Innvolution's Premier Elite Cath Lab was instrumental in the procedure’s success, offering high-resolution imaging that allowed for precise guidance while minimizing radiation exposure. The enhanced visibility ensured accurate occluder placement, contributing to a smooth and effective closure with an excellent clinical outcome.`,
          videoLink: 'https://www.youtube-nocookie.com/embed/I1bBvTD4aRY',
          thumbnail: 'https://www.youtube-nocookie.com/embed/I1bBvTD4aRY',
        },
        {
          content: 'Atrial Septal Defect',
          desc: `An atrial septal defect (ASD) was discovered in a 15-year-old girl. The ASD closure procedure was successfully performed in our Pinnacle Agile lab, restoring the young patient's healthy cardiac functions and a fully operational heart. The phyasician and technician were ecstatic about the image quality achieved at a lower radiation dose and the system's usability.`,
          videoLink: 'https://www.youtube-nocookie.com/embed/QQsGvYJNspM',
          thumbnail: 'https://www.youtube-nocookie.com/embed/QQsGvYJNspM',
        },
      ],
    },
    {
      tab: 'DSA',
      subtab: [
        {
          title: 'Neuro vascular',
          data: [
            {
              content: 'Cerebral Aneurysm Coiling',
              desc: `A patient underwent a selective four-vessel digital subtraction angiogram (DSA) via a right femoral artery approach. This comprehensive evaluation identified a right internal carotid artery (ICA) posterior communicating (Pcom) aneurysm while confirming that other intracranial vessels were normal. Following this assessment, the definitive endovascular coiling procedure commenced using a balloon-assisted technique. A Neuron catheter was advanced into the right distal ICA for visualization, and a microcatheter was navigated over a microguidewire to cannulate the aneurysm. Coiling was performed with a single coil, assisted by a HyperForm balloon. Post-coiling imaging confirmed complete occlusion of the aneurysm with normal distal blood flow, and other intracranial vessels remained intact. Innvolution's Premier Elite Cath Lab played a pivotal role in the successful endovascular coiling of the right ICA bifurcation aneurysm in the context of diffuse subarachnoid hemorrhage (SAH), classified as Hunt and Hess Grade II. Its superior image quality and real-time fluoroscopy enabled accurate visualization of the aneurysm and surrounding vascular structures. Its advanced ASPIRE technology significantly reduced radiation doses for both the patient and staff, prioritizing safety while maintaining high image clarity.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/AlFeO4xj4Dg',
              thumbnail: 'https://www.youtube-nocookie.com/embed/AlFeO4xj4Dg',
            },
            {
              content: 'Cerebral Endovascular Coiling Procedure',
              desc: `A patient with a right ICA-PCOM large fusiform aneurysm complicated by subarachnoid hemorrhage (SAH), classified as Hunt & Hess grade IV, and intraventricular hemorrhage (IVH) underwent an urgent endovascular intervention. The procedure began with a right femoral approach, where a sheath was introduced following arterial puncture. A Neuron catheter was advanced into the right distal ICA for visualization, confirming the presence of the aneurysm while demonstrating that other intracranial vessels remained normal. The definitive endovascular coiling procedure was then performed using a stent-assisted technique. A microcatheter was meticulously navigated over a micro guidewire to access the aneurysm for coiling. This approach allowed for the precise deployment of a stent, followed by the coiling of the aneurysm using multiple coils to achieve complete occlusion. Innvolution's Premier Elite Cath Lab helped in delivering advanced imaging capabilities that ensured optimal visualization of the aneurysm and surrounding vascular structures. The system’s real-time fluoroscopy, combined with the innovative ASPIRE technology, significantly reduced radiation exposure for both the patient and staff, prioritizing safety while maintaining exceptional image clarity throughout the procedure.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/AlFeO4xj4Dg',
              thumbnail: 'https://www.youtube-nocookie.com/embed/AlFeO4xj4Dg',
            },
            {
              content: 'Neuro Angiography',
              desc: `A Neuro Angiography Case was executed using our cutting-edge Pinnacle Agile Cath lab system. This remarkable system offers a crystal-clear visualization of arteries through the Digital Subtraction Angiography mode.   The Pinnacle Agile Cath lab system is known for its user-friendly design, making it an excellent choice for peripheral and vascular interventional radiology procedures. Its outstanding Image Quality sets a high standard, accompanied by a commitment to reducing radiation exposure to the lowest achievable levels.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/9BMfcrlKo8c',
              thumbnail: 'https://www.youtube-nocookie.com/embed/9BMfcrlKo8c',
            },
            {
              content: 'Carotid Stenting',
              desc: `A 64-year-old patient was diagnosed with stenosis in the right proximal internal carotid artery (ICA) from the ostial to the proximal right carotid artery. The condition was treated with carotid stenting, using an emboshield protection device, in our state-of-the-art Premier Select Cath lab. The outcome of the procedure was successful, and the physicians expressed their contentment with both the system's performance and the quality of the images obtained.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/NS_KgBRtWHo',
              thumbnail: 'https://www.youtube-nocookie.com/embed/NS_KgBRtWHo',
            },
            {
              content: 'Carotid Plasty',
              desc: `A patient with a history of a right Middle Cerebral Artery (MCA) territory infarct presented with left Internal Carotid Artery (ICA) occlusion. A selective 4 Vessel DSA cerebral angiogram performed via a left femoral approach demonstrated 60% stenosis in the proximal segment of the left ICA, along with diffuse atherosclerotic changes in the intracranial vessels. Carotid stenting was advised to optimize cerebral perfusion and mitigate the risk of recurrent ischemic events. A sheath was advanced through the right femoral approach to the left proximal ICA, and the stenotic lesion was traversed with a guidewire. A self-expandable stent was deployed across the ICA to the Common Carotid Artery (CCA), followed by post-stent dilation with a balloon. Final angiography revealed no residual stenosis, thrombus, or flow compromise, confirming a successful outcome. Innvolution's Premier Elite Cathlab played a pivotal role in ensuring high-resolution imaging and real-time fluoroscopic guidance throughout the procedure. This state-of-the-art system enabled precise lesion assessment and facilitated the effective deployment of the stent, significantly contributing to the successful outcome.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/mSKfgfYeOhM',
              thumbnail: 'https://www.youtube-nocookie.com/embed/mSKfgfYeOhM',
            },
            {
              content: 'Aneurysm Coiling Procedure',
              desc: `A 50-year-old patient presented with Acute Subarachnoid Hemorrhage (SAH) and underwent a 4-Vessel Digital Subtraction Angiography (DSA) for detailed diagnostic evaluation. The procedure was performed via a right femoral artery approach, allowing selective cannulation of the Right Common Carotid Artery (CCA), Left Internal Carotid Artery (ICA), and Bilateral Vertebral Arteries. Imaging confirmed a fusiform aneurysm at the junction of the Right Vertebral Artery and the Posterior Inferior Cerebellar Artery (PICA), while all other intracranial vessels appeared normal. The patient underwent transcarotid endovascular stent-assisted coiling via a right femoral approach under local anesthesia. The right vertebral artery was accessed with a long sheath over a guidewire, and the aneurysm was cannulated using microcatheters. A stent was deployed across the aneurysm neck, followed by coiling to ensure complete exclusion. Post-procedure imaging confirmed total aneurysm occlusion with preserved normal flow in all distal branches, ensuring successful vascular integrity. Innvolution's Premier Elite Cath Lab helped in delivering advanced imaging capabilities that ensured optimal visualization of the aneurysm and surrounding vascular structures. The system’s real-time fluoroscopy, combined with the innovative ASPIRE technology, significantly reduced radiation exposure for both the patient and staff, prioritizing safety while maintaining exceptional image clarity throughout the procedure.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/icjUypwE2Xk',
              thumbnail: 'https://www.youtube-nocookie.com/embed/icjUypwE2Xk',
            },
          ],
        },
        {
          title: 'Peripheral vascular',
          data: [
            {
              content: 'Abdomen Embolization',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/9hbSkDJKS2A',
              thumbnail: 'https://www.youtube-nocookie.com/embed/9hbSkDJKS2A',
            },
            {
              content: 'Peripheral Stenting',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/Sq6AU9X6-8I',
              thumbnail: 'https://www.youtube-nocookie.com/embed/Sq6AU9X6-8I',
            },
            {
              content: 'Brachial Artery',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/IiafffIcPjk',
              thumbnail: 'https://www.youtube-nocookie.com/embed/IiafffIcPjk',
            },
            {
              content: 'DSA peripheral',
              desc: `Presenting DSA series captured on Innvolution Cathlabs Digital subtraction angiography (DSA) is a fluoroscopy technique used in interventional radiology to clearly visualize blood vessels in a bony or dense soft tissue environment. Images are produced using contrast medium by subtracting a "pre-contrast image" or mask from subsequent images once the contrast medium has been introduced into a structure. Hence the term "digital subtraction angiography". DSA is primarily used to image blood vessels. It is useful in the diagnosis and treatment of arterial and venous occlusions, including carotid artery stenosis, pulmonary embolisms, acute limb ischemia; arterial stenosis, which is particularly useful for potential kidney donors in detecting renal artery stenosis. DSA is the gold standard investigation for cerebral aneurysms, renal artery stenosis,tumor vascularity,thrombosis,arterial dissection,thrombosis, arterio-venous fistuala(AVF), and arteriovenous malformations (AVM). Innvolution Cathlabs redefine medical imaging with unrivaled precision. Renowned for its cutting-edge technology, it delivers unparalleled image quality—capturing intricate vascular details and dynamic cardiac images at the lowest radiation dose designed for patients and clinician's safety. This innovation empowers clinicians to make confident, informed decisions for superior patient care with optimum space and positioning for cardiac, neuro and peripheral treatment.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/CwyB9Afyh6s',
              thumbnail: 'https://www.youtube-nocookie.com/embed/CwyB9Afyh6s',
            },
            {
              content: 'Right Renal',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/7dK18n3GLgU',
              thumbnail: 'https://www.youtube-nocookie.com/embed/7dK18n3GLgU',
            },
            {
              content: 'Final External Iliac artery, Profonda Femoral Artery',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/FDBhAWPLshc',
              thumbnail: 'https://www.youtube-nocookie.com/embed/FDBhAWPLshc',
            },
            {
              content: 'Left Iliac Angioplasty',
              desc: `Presenting Left Iliac Angioplasty performed on our Innvolution Cathlab. Angiogram revealed critical stenosis – thrombotic occlusion of Left Common Iliac Artery from its origin onwards causing flow limiting stenosis. Using catheter guide wire combination, thrombolysis was performed. Also balloon angioplasty was done for stenotic segment. Good flow till plantar arch is seen post thrombolysis. Successful Left Iliac Artery Angioplasty was performed and flow across achieved post angioplasty.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/FDBhAWPLshc',
              thumbnail: 'https://www.youtube-nocookie.com/embed/FDBhAWPLshc',
            },
            {
              content: 'Biliary Stenting Procedure',
              desc: `Biliary stenting is a medical procedure commonly performed in a catheterization laboratory (cathlab) to treat obstructions or strictures in the bile ducts. The bile ducts are tubes that carry bile from the liver to the small intestine, and when these ducts are blocked, it can lead to various health issues. A catheter (a thin, flexible tube) is introduced into the bile ducts through the skin, guided by fluoroscopy. Contrast dye is injected through the catheter, and X-ray imaging (fluoroscopy) is used to visualize the bile ducts and identify the location and extent of the obstruction. A guidewire is then advanced through the catheter and into the bile duct beyond the obstruction. This provides a pathway for the stent placement. A biliary stent, is threaded over the guidewire and placed across the obstruction. Stents help keep the bile duct open and allow the free flow of bile Case Study: Today we are showcasing a successful interventional radiology procedure biliary stenting on Innvolution's #PremierElite Cathlab. Under local anesthesia, Guide wire was negotiated through previously placed 8F external internal catheter in Right posterior hepatic & left hepatic duct. Over an Amplatz wire Biliary stenting was done using a 10*120mm stent followed by balloon plasty using 7*100mm balloon. Cholangiogram showed free flow of bile into duodenum. The patient handled this procedure without any issues. The advanced imaging technology within our Cathlab ensures that healthcare providers can confidently navigate a wide range of cases, contributing to improved patient care and outcomes.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/5uiS281ZnV4',
              thumbnail: 'https://www.youtube-nocookie.com/embed/5uiS281ZnV4',
            },
            {
              content: 'Angiojet',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/cBFGIUMbZEw',
              thumbnail: 'https://www.youtube-nocookie.com/embed/cBFGIUMbZEw',
            },
            {
              content: 'Peripheral Angio',
              desc: `Today we are presenting Peripheral Angiogrpahy performed on our Pinnacle Agile Cath lab system for a 65 year old male patient with severe claudication pain in the left leg. PAG showed Left Proximal Superficial Femoral Artery has multiple critical, abnormal segments; Proximal SFA has moderate stenosis; Mid SFA & Distal SFA has severe stenosis.The left Proximal Anterior Tibial artery & Left Mid Posterior Tibial artery are diseased. The Left Dorsalis Pedis artery has multiple stenoses. The left Planter arch is faintly filling. Right side Lower limb arteries are normal.Pinnacle Agile, one of the most versatile Cath Labs in the market, allows smooth execution of the whole lower peripheral case without changing the position for a 5 feet 10 inch tall patient.`,
              videoLink: 'https://www.youtube-nocookie.com/embed/tL6WSU2jGuQ',
              thumbnail: 'https://www.youtube-nocookie.com/embed/tL6WSU2jGuQ',
            },
            {
              content: 'Roadmap',
              desc: '',
              videoLink: 'https://www.youtube-nocookie.com/embed/MoqYRKC1Gd4',
              thumbnail: 'https://www.youtube-nocookie.com/embed/MoqYRKC1Gd4',
            },
          ],
        },
      ],
    },
    {
      tab: 'Softwares',
      subtab: [],
      data: [
        {
          content: 'AI Insta QCA',
          desc: `AInsta QCA stands as an advanced solution, utilizing artificial intelligence for Quantitative Coronary Analysis (QCA) to achieve real-time results in less than two seconds. This cutting-edge technology offers numerous features and benefits that make it a powerful tool in the field of coronary analysis.
            AInsta QCA leverages AI to revolutionize coronary analysis, providing fast, accurate, and automated assessments, setting a new standard for healthcare professionals and patients.
          `,
          keyFeatures: [
            'Automated Segmentation: AI-powered, real-timemorphological assessment of coronary arteries.',
            'Lesion Analysis: Detailed analysis for accurate diagnosis and treatment planning.',
            'Stent Recommendation: Automated suggestions for stent placement.',
            'Automated Classification: High classification accuracy of 0.99 for reliable results.',
          ],
          benefits: [
            'No Manual Operation: Fully automated, reducing human error and saving time.',
            'Real-Time Analysis: Fast, accurate results in under two seconds.',
            'State-of-the-Art Accuracy: Exceptional vessel segmentation accuracy with an F1 score of 0.92.',
            'Interactive Customization: Flexible customization of vessel contour, length, lesion, and stent area.',
          ],
          videoLink: 'https://www.youtube-nocookie.com/embed/SX-o1VEC0lI',
          thumbnail: 'https://www.youtube-nocookie.com/embed/SX-o1VEC0lI',
        },
        {
          content: 'AI MAG',
          desc: `See the unseen with AIMAG At Innvolution, we're excited to introduce AIMAG, our AI-guided advanced magnification software that transforms medical imaging.`,
          keyFeatures: [
            'Image Enhancement: AI algorithms reconstruct high-resolution images from low-resolution inputs.',
            'Magnification: Zoom in on specific regions of interest within fluoroscopy images for detailed examination.',
            'Improved ROI Visualization: Ensures crystal-clear, artifact-free images.',
          ],
          benefits: [
            'Zero Extra Radiation: Achieve higher magnification with no additional radiation exposure.',
            'Zero Extra Contrast: No need for contrast injection.',
            'No Image Quality Deterioration: Maintain high-quality images without compromise.',
            'Using a Mag 0 image, AIMAG generates highly magnified outputs without deteriorating image quality, contrast injection, or C arm/table movement',
          ],
          whyChoose: [
            'Superior resolution with zero additional radiation exposure.',
            'Enhanced visualization of critical areas, improving diagnostic accuracy.',
            'Safe and efficient imaging, prioritizing patient care.',
            'Join us in advancing medical imaging technology. See the unseen with AIMAG!',
          ],
          videoLink: 'https://www.youtube-nocookie.com/embed/Cs3fpcJa_Xg',
          thumbnail: 'https://www.youtube-nocookie.com/embed/Cs3fpcJa_Xg',
        },
        {
          content: 'CAAS vFFR',
          desc: `Innvolution in association with Pie Medical Imaging presents a unique software CAAS vFFR.CAAS vFFR calculates the pressure drop in coronary vessels without the need of a pressure wire. The vFFR module builds a 3D reconstruction of two angiograms and assesses pressure-drop, resulting in a vFFR value. Additionally, the 3D reconstruction will enable assessment of severity and percentage of stenosis.`,
          vFFRBenefits: [
            'NO PRESSURE CATHETERS : Avoids Complications due to wire manipulation',
            'NO ADENOSINE SIDE EFFECTS : Avoids Complications associated with the administration of vasodilator',
            'TAKES LESS TIME : Less-invasive Easy one minute analysis CAAS vFFR is a registered trademark owned by Pie Medical Imaging and Innvolution holds the marketing and sales partnership rights for CAAS vFFR in India.',
          ],
          videoLink: 'https://www.youtube-nocookie.com/embed/P32RV76G32o',
          thumbnail: 'https://www.youtube-nocookie.com/embed/P32RV76G32o',
        },
        {
          content: 'IV LINQ',
          desc: `Real-time co-registration of angiography with IVUS and OCT`,
          mainPoints: [
            'Co-register real time between angiography and IVUS/OCT with IV-LINQ to obtain a detailed view of the lesion and its exact location in the coronary tree.',
            'By using just two angiograms (one with and one without contrast), co-registration can be performed with every IVUS or OCT system.',
            'IV-LINQ facilitates detailed visualization by integrating IVUS or OCT data seamlessly with angiography. ',
            'Co-registration integrates angiography and IVUS/OCT to provide the most detailed view of the lesion related to its exact location in the coronary tree.',
            'Co-registration facilitates optimal assessment of the landing zone of the stent.',
            'Importantly, IV-LINQ automates the alignment of angiography with IVUS or OCT data, eliminating the need for manual identification of anatomical positions.',
            'IVLINQ is CE 0123 marked and FDA Cleared ',
          ],
          benefits: [
            'Providing exact anatomical registration between angiography and IVUS ',
            'Co-registration enables non-contrast PCI procedures',
            'Precisely identifies locations especially in tortuous vessels',
            'Allows visualization of anatomical location and composition of CTO registered to angiogram',
            'Facilitates side by side placement of stents',
          ],
          videoLink: 'https://www.youtube-nocookie.com/embed/luqAaJ88RUw',
          thumbnail: 'https://www.youtube-nocookie.com/embed/luqAaJ88RUw',
        },
        {
          content: 'QVA',
          desc: `Quantitative Vascular Analysis (QVA) offers a cutting-edge solution for quick, intuitive assessment of peripheral vessels. Tailored to evaluate key arterial structures like abdominal aorta, carotid, renal, iliac, and femoral arteries, it delivers vital insights into vascular health, advancing diagnostic precision and patient care.`,
          keyResults: [
            'Lesion Diameter',
            'Percentage of Stenosis',
            'Reference Diameter',
            'Obstruction Length',
          ],
          videoLink: 'https://www.youtube-nocookie.com/embed/woZXuZRRLS0',
          thumbnail: 'https://www.youtube-nocookie.com/embed/woZXuZRRLS0',
        },
        {
          content: 'Stent Clarity',
          desc: ``,
          integratedFootPedal: [
            'Enables seamless work with our smart software.',
            'Visualize vital insights for accurate stent placement in real-time',
          ],
          stenEnhancementTool: [
            'Ensures streamlined stent placement.',
            'Leads to shorter procedure time and better.',
          ],
          RealTimeStentEnhancement: [
            'Procedure time of 3 to 5 secs.',
            'Enables instant enhancement of stent visualization during procedures.',
          ],
          OnlineStentEnhancement: [
            'Enables online stent enhancement procedure in 8 to 12 secs with 40 frames.',
            'Access enhanced stent images for post-procedural analysis.',
          ],
          OfflineStentEnhancement: [
            'Procedure time of 12 to 15 secs.',
            'Enhances stent visualization during offline review and analysis.',
          ],
          videoLink: 'https://www.youtube-nocookie.com/embed/IrzfHz6dbOs',
          thumbnail: 'https://www.youtube-nocookie.com/embed/IrzfHz6dbOs',
        },
      ],
    },
  ]

  const activeTab = carouselList[activeIndex]
  const activeData = activeTab.subtab?.length
    ? activeTab.subtab[subTabActiveIndex]?.data || []
    : activeTab.data || []

  return (
    <section className="blade-top-padding-lg blade-bottom-padding lg:blade-bottom-padding-lg lg:blade-top-padding">
      <div className="mx-auto mb-12 w-fit">
        <div className="hidden gap-3 gsap-opacity-trans-appear 2xl:gap-4 lg:flex ">
          {carouselList.map((elem, index: number) => {
            const key = `${index}`
            const isActive = activeIndex === index
            const hasSubtab = elem.subtab && elem.subtab.length > 0
            return (
              <React.Fragment key={key}>
                <div className={`relative `}>
                  <button
                    aria-label={elem.tab}
                    type="button"
                    onClick={() => handleTabClick(index)}
                    className={`flex 2xl:text-xl whitespace-nowrap text-base xl:text-lg border-[2px]
                                    transition-all px-3 duration-300 border-solid rounded-md font-medium 2xl:px-5 py-2 
                                    focus:outline-orange place-content-center flex-1 items-center gap-3
                                    focus-visible:bg-white hover:!border-orange hover:bg-white mx-auto group
                                    ${
                                      activeIndex === index
                                        ? 'text-orange !border-orange bg-white'
                                        : 'text-[#4D4D4D] !border-transparent bg-transparent'
                                    }`}
                  >
                    {/* <svg
                      className={`${
                        activeIndex === index
                          ? 'fill-[#F69A4D]'
                          : 'fill-[#4D4D4D] h-0 w-0'
                      } transition-all duration-300`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.92743 1.77182C8.92743 0.79327 8.13416 0 7.15561 0C6.17706 0 5.38379 0.79327 5.38379 1.77182V2.69455C5.38379 4.18124 4.17859 5.38644 2.69189 5.38644H1.77182C0.79327 5.38644 0 6.17971 0 7.15826C0 8.13681 0.79327 8.93008 1.77182 8.93008H2.69189C4.17859 8.93008 5.38379 10.1353 5.38379 11.622V12.5446C5.38379 13.5231 6.17706 14.3164 7.15561 14.3164C8.13416 14.3164 8.92743 13.5231 8.92743 12.5446V11.6232C8.92743 10.1358 10.1332 8.93008 11.6206 8.93008H12.5446C13.5231 8.93008 14.3164 8.13681 14.3164 7.15826C14.3164 6.17971 13.5231 5.38644 12.5446 5.38644H11.6206C10.1332 5.38644 8.92743 4.18065 8.92743 2.69322V1.77182Z"
                        fill=""
                      />
                    </svg> */}
                    {elem.tab}

                    {elem.subtab.length > 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        className={`${
                          activeIndex === index ? '-rotate-90 text-orange' : ''
                        } transition-all duration-300 w-[16px] h-[16px]`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    ) : (
                      ''
                    )}
                  </button>
                  {/* Subtab container */}
                  {hasSubtab && (
                    <div
                      className={` mt-5 px-3 header-shadow rounded-md font-medium 2xl:px-5 py-2 place-content-center flex-1 transition-all duration-300 ease-in-out ${
                        isActive
                          ? 'opacity-100 visible'
                          : 'opacity-0 invisible '
                      }`}
                    >
                      {elem.subtab.map((item, subIndex) => (
                        <p
                          onClick={() => handleSubTabClick(subIndex)}
                          key={subIndex}
                          className={`hover:text-orange hover:underline cursor-pointer text[#4D4D4D] 2xl:text-base text-[12px] xl:text-sm mb-3 last:mb-0 ${
                            subTabActiveIndex === subIndex
                              ? 'text-orange !border-orange bg-white'
                              : 'text-[#4D4D4D] !border-transparent bg-transparent'
                          }`}
                        >
                          {item.title}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="h-[50px] w-[2px] bg-[#CCC] last-of-type:hidden"></div>
              </React.Fragment>
            )
          })}
        </div>
      </div>
      <div className="hidden grid-cols-2 gap-6 w-container xl:grid-cols-3 lg:grid">
        {activeData.map((item, index) => (
          <Card
            key={index}
            coverImage={item.videoLink}
            thumbnail={item.thumbnail}
            title={item.content}
            toggleModal={handleModalReveal}
            index={index}
          />
        ))}
        <VideoModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          videoData={
            selectedVideoIndex !== null
              ? carouselList[activeIndex]?.subtab.length
                ? carouselList[activeIndex]?.subtab?.[subTabActiveIndex]
                    ?.data?.[selectedVideoIndex]
                : carouselList[activeIndex]?.data?.[selectedVideoIndex]
              : undefined
          }
        />
      </div>

      {/* Mobile View */}

      <div className="block w-full mx-auto mb-6 lg:hidden">
        {/* Tabs Container */}
        <div className="flex gap-3 overflow-x-auto w-container no-scrollbar whitespace-nowrap">
          {carouselList.map((elem, index: number) => {
            const isActive = activeIndex === index
            return (
              <button
                key={index}
                aria-label={elem.tab}
                type="button"
                onClick={() => handleTabClick(index)}
                className={`flex-shrink-0 whitespace-nowrap text-base xl:text-lg border-[2px] px-3 py-2 rounded-md font-medium
                  transition-all duration-300 focus:outline-orange hover:border-orange hover:bg-white
                  ${
                    isActive
                      ? 'text-orange border-orange bg-white'
                      : 'text-[#4D4D4D] border-transparent bg-transparent'
                  }`}
              >
                {elem.tab}
              </button>
            )
          })}
        </div>

        {/* Sub tabs Container */}
        {carouselList[activeIndex]?.subtab && (
          <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar whitespace-nowrap w-container">
            {carouselList[activeIndex].subtab.map((subElem, subIndex) => {
              const isActiveSubtab = subTabActiveIndex === subIndex
              return (
                <button
                  key={subIndex}
                  onClick={() => handleSubTabClick(subIndex)}
                  className={`flex-shrink-0 whitespace-nowrap text-sm px-3 py-1 rounded-md font-medium
                    transition-all duration-300 focus:outline-orange hover:border-orange hover:bg-white
                    ${
                      isActiveSubtab
                        ? 'text-orange border-orange bg-white'
                        : 'text-[#4D4D4D] border-transparent bg-transparent'
                    }`}
                >
                  {subElem.title}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Swiper for Cards */}
      <Swiper
        slidesPerView={1.1}
        spaceBetween={16}
        centeredSlides={true}
        breakpoints={{
          475: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
        }}
        pagination={{
          bulletActiveClass: 'bg-orange opacity-100',
          clickable: true,
        }}
        loop
        speed={1000}
        modules={[Pagination, Autoplay, Navigation, A11y]}
        className="block pb-10 mt-6 lg:hidden"
      >
        {activeData.map((item, cardIndex) => (
          <SwiperSlide key={cardIndex}>
            <Card
              coverImage={item.videoLink}
              thumbnail={item.thumbnail}
              title={item.content}
              toggleModal={() =>
                console.log(`Toggle modal for index ${cardIndex}`)
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Carasouel

export function Card({
  title,
  index,
  coverImage,
  toggleModal,
  thumbnail,
}: {
  coverImage: string
  index?: number
  toggleModal: (update: number) => void
  title: string
  thumbnail?: string
}) {
  console.log('titles', title)
  return (
    <article className="h-full overflow-hidden bg-white border-solid rounded-md gsap-opacity border-1 border-orange border-opacity-60 hoverClass">
      <div className="relative h-52 2xl:h-60">
        <div
          onClick={() => toggleModal(index ?? 0)}
          className="absolute inset-0 grid p-4 cursor-pointer place-content-end "
        >
          {/* <button
            aria-hidden
            aria-label="Toggle video"
            type="button"
            onClick={() => toggleModal(index ?? 0)} 
            className="grid bg-white rounded-full fill-black hover:fill-orange outline-offset-2 focus-visible:outline-orange outline-transparent outline-2 focus-visible:fill-orange h-14 w-14 place-content-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 24"
              className="translate-x-[2px] transition-all duration-300 ease-in-out"
              fill="inherit"
            >
              <path
                d="M19.6982 11.9684L0.0207509 23.3292L0.0207519 0.607619L19.6982 11.9684Z"
                fill="inherit"
              />
            </svg>
          </button> */}
        </div>

        {/* <iframe
          src={`${coverImage}?rel=0&showinfo=0&modestbranding=1&controls=0&vq=small`}
          className="object-cover object-top w-full h-full"
          loading="lazy"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
        {/* <img
          src={`https://img.youtube.com/vi/${
            coverImage.split('/').pop()?.split('?')[0]
          }/hqdefault.jpg`}
          alt=""
          className="object-cover object-top w-full h-full"
        /> */}
        {title === 'Cerebral Endovascular Coiling Procedure' ? (
          <img
            src={CereBralThumbnail}
            alt=""
            className="object-cover object-top w-full h-full"
          />
        ) : (
          <img
            src={`https://img.youtube.com/vi/${
              coverImage.split('/').pop()?.split('?')[0]
            }/hqdefault.jpg`}
            alt=""
            className="object-cover object-top w-full h-full"
          />
        )}
        <img
          onClick={() => toggleModal(index ?? 0)}
          style={{
            position: 'absolute',
            top: '50%',
            width: '80px',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            cursor: 'pointer',
          }}
          src={YoutubeIcon}
          alt=""
        />
      </div>
      <div className="flex justify-between gap-4 px-3 pt-6 pb-4">
        <span className="text-[0.75rem] xl:text-[1.25rem] 2xl:text-[1.4rem] font-medium pb-1">
          {title}
        </span>

        <button
          onClick={() => toggleModal(index ?? 0)}
          className="p-3 transition-all duration-200 bg-white border border-transparent shadow h-fit shadow-black/20 rounded-xl hover:border-orange"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-auto rotate-180"
            viewBox="0 0 25 21"
            fill="black"
          >
            <path d="M9.52058 1.08151L10.6028 -0.000732422L12.7672 2.16374L11.685 3.24597L9.52058 1.08151ZM2.56763 10.1989L1.48541 11.2811L0.403183 10.1989L1.48541 9.11669L2.56763 10.1989ZM11.685 17.1519L12.7672 18.2341L10.6028 20.3985L9.52058 19.3163L11.685 17.1519ZM23.2295 8.6684H24.76V11.7294H23.2295V8.6684ZM11.685 3.24597L3.64985 11.2811L1.48541 9.11669L9.52058 1.08151L11.685 3.24597ZM3.64985 9.11669L11.685 17.1519L9.52058 19.3163L1.48541 11.2811L3.64985 9.11669ZM2.56763 8.6684H23.2295V11.7294H2.56763V8.6684Z" />
          </svg>
        </button>
      </div>
    </article>
  )
}

interface VideoModalProps {
  isOpen: boolean
  closeModal: () => void
  videoData?: {
    content?: string
    desc?: string
    keyFeatures?: [string]
    mainPoints?: [string]
    benefits?: [string]
    vFFRBenefits?: [string]
    whyChoose?: [string]
    integratedFootPedal?: [string]
    stenEnhancementTool?: [string]
    RealTimeStentEnhancement?: [string]
    OnlineStentEnhancement?: [string]
    OfflineStentEnhancement?: [string]
    keyResults?: [string]
    videoLink?: string
    thumbnail?: string
  }
}

const ListSection = ({
  title,
  list,
}: {
  title: string
  list: [string] | undefined
}) => {
  if (!list) return null
  return (
    <div>
      <h6 className="mt-2 mb-1 font-bold">{title}: </h6>
      <ul className="list-disc list-inside">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  closeModal,
  videoData,
}) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="relative min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 " />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative inline-block w-full h-auto max-w-4xl mt-10 mb-10 text-left align-middle transition-all transform bg-white border-4 border-white border-solid rounded-md shadow-xl sm:blade-top-margin sm:blade-bottom-margin">
              <button
                onClick={closeModal}
                className="absolute md:-top-5 top-5 md:-right-5 right-5 z-10 p-2 bg-orange border-[2px] border-white rounded-full hover:bg-lightOrange focus-visible:bg-lightOrange hover:bg-white group"
                aria-label="Close video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-4 h-4 group-hover:stroke-orange"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative flex flex-col h-full p-5 overflow-hidden">
                {/* <button
                  onClick={closeModal}
                  className="absolute z-10 p-3 bg-transparent border-4 border-white rounded-full top-7 left-7 hover:bg-lightOrange focus-visible:bg-lightOrange"
                  aria-label="Close video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button> */}
                <div className="flex-1 overflow-hidden rounded-md sm:min-h-[450px] min-h-[250px]">
                  {/* <iframe
                    // controls
                    className="h-full w-full object-cover sm:min-h-[450px] min-h-[250px]"
                    src={`${videoData?.videoLink}?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&vq=small`}
                    // src={`${videoData?.thumbnail}?autoplay=1&mute=1&rel=0`}
                    // autoPlay
                    // loop
                    loading="lazy"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  /> */}
                  {videoData?.content ===
                  'Cerebral Endovascular Coiling Procedure' ? (
                    <video
                      src={CerebralVideo}
                      controls
                      className="h-[450px] w-[100%] min-h-[250px]"
                      autoPlay
                    ></video>
                  ) : (
                    <iframe
                      // controls
                      className="h-full w-full object-cover sm:min-h-[450px] min-h-[250px]"
                      src={`${videoData?.videoLink}?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&vq=small`}
                      // src={`${videoData?.thumbnail}?autoplay=1&mute=1&rel=0`}
                      // autoPlay
                      // loop
                      loading="lazy"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                <div className="blade-top-margin-sm blade-bottom-margin-sm">
                  <h5 className="mb-5 font-bold">{videoData?.content}</h5>
                  <p>{videoData?.desc}</p>
                  <ListSection
                    title="Key Features"
                    list={videoData?.keyFeatures}
                  />
                  <ListSection title="Benefits" list={videoData?.benefits} />
                  <ListSection
                    title="Why Choose AIMAG"
                    list={videoData?.whyChoose}
                  />
                  <ListSection
                    title="vFFR Benefits"
                    list={videoData?.vFFRBenefits}
                  />
                  <ListSection
                    title="Key Results"
                    list={videoData?.keyResults}
                  />
                  <ListSection
                    title="Integrated Foot Pedal"
                    list={videoData?.benefits}
                  />
                  <ListSection
                    title="Stent Enhancement Tool"
                    list={videoData?.stenEnhancementTool}
                  />
                  <ListSection
                    title="Real Time Stent Enhancement"
                    list={videoData?.RealTimeStentEnhancement}
                  />
                  <ListSection
                    title="Online Stent Enhancement"
                    list={videoData?.OnlineStentEnhancement}
                  />
                  <ListSection
                    title="Offline Stent Enhancement"
                    list={videoData?.OfflineStentEnhancement}
                  />
                  {videoData?.mainPoints && videoData.mainPoints.length > 0 && (
                    <div>
                      <p className="mt-1 mb-1">
                        Vendor independent: runs with almost every IVUS and OCT
                        system.
                      </p>
                      <ul className="list-disc list-inside">
                        {videoData?.mainPoints?.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
