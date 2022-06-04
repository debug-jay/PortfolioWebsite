import React from 'react';
import './index.css';
import "@fontsource/odibee-sans";
import gitlogo from './imgs/GitMark.svg';

//#region NAVBAR__CONTENT
const NAVBAR__LOGIC = () => {

  const [show, setShow] = React.useState(false);
  
  return (
  <header>
    <div className='relative top-0 mt-2 w-full h-11 md:h-14 items-center grid grid-cols-2 md:grid-cols-3'>
      <div className='flex justify-center text-2xl md:text-2xl italic decoration-2 navitem__home'><a className='bg-white-500' href="/">Home</a></div>
      <div className='relative items-center justify-end md:justify-center flex md:center navbar__container'>
        {/* NAVBAR ICON FOR MOBILE */}
        <nav className='relative'>
          <button className='translate-y-1 top-2 mr-5 md:hidden ' id="hamburger" onClick={()=>setShow(!show)}>
            <div className='bg-white mb-1.5 w-7 h-1 rounded-md'></div>
            <div className='bg-white mb-1.5 w-7 h-1 rounded-md'></div>
            <div className='bg-white w-7 h-1 rounded-md'></div>
          </button>
          
        </nav>
        {/* NAVBAR FOR DESKTOP */}
        <NAVBAR__DESKTOP />
    </div>
    <div className='relative items-center justify-end md:justify-center md:flex md:center hidden'>
      <a href="https://github.com/debug-jay" rel="noreferrer" target="_blank"><img className='h-9 bg-slate-500 rounded-full' src={gitlogo} alt="gitlogo"/></a>
    </div>
    </div> 
    {/* NAVBAR FOR MOBILE */}
    {show?<div className='grid grid-cols-1 grid-rows-3 w-full bg-white bg-opacity-5 navbar__container'>
          <div className='flex justify-center mt-2 navitem__b'><a href="#about__section" onClick={()=>setShow(!show)}>About</a></div>       
          <div className='flex justify-center mt-2 navitem__b'><a href="#projects__section" onClick={()=>setShow(!show)}>Projects</a></div>  
          <div className='flex justify-center mt-2 mb-2 navitem__b'><a href="#contact__section" onClick={()=>setShow(!show)}>Contact</a></div> 
          <div className='flex justify-center mt-2 mb-2'><a href="https://github.com/debug-jay" rel="noreferrer" target="_blank"><img className='h-8 bg-transparent bg-slate-500 rounded-full' src={gitlogo} alt="gitlogo"/></a></div> 
        </div>:null}
  </header>);
}

const NAVBAR__DESKTOP = () => {
  return (
    <nav className='hidden md:grid grid-cols-3 w-full'>
      <div className='flex justify-center navitem__b'><a href="#about__section">About</a></div>       
      <div className='flex justify-center navitem__b'><a href="#projects__section">Projects</a></div>  
      <div className='flex justify-center navitem__b'><a href="#contact__section">Contact</a></div> 
    </nav>
  );
}

class NAVBAR extends React.Component {
  render() {
    return (
      <NAVBAR__LOGIC />
    );
  }
}
//#endregion NAVBAR__CONTENT

const ABTMES = (props) => {
  /* POPUP-MENU's HOOKS */

  // 2019 Hook
  const [NINE, setTW_NINE] = React.useState(false);

  // 2020 Hook
  const [TEN, setTW_TEN] = React.useState(false);

  // 2021 Hook
  const [ELEVEN, setTW_ELEVEN] = React.useState(false);

  // 2022 Hook
  const [TWELVE, setTW_TWELVE] = React.useState(false);

  return (
    <>
      <section id="about__section"></section>
      <div className='mt-14 ml-5 mr-5 flex justify-center w-fit text-3xl md:text-4xl section__tag'>
          <h1>About Me</h1>
      </div>
      <div className='mt-5 ml-20 mr-20'>
        <form action="downloadResume">
          <a href="https://download855.mediafire.com/hhx9ktg0hqxg/n8jyj95xgljez8u/Gulley_Jaydin_Resume.docx" className='border border-black bg-white bg-opacity-25 pr-3 pl-3 rounded-lg text-2xl text-gray-200 italic' type="button">Download Resume</a>
        </form>
      </div>
      <div className=' mt-5 ml-20 mr-20'>
        <p className='text-white opacity-80 text-2xl'>Past 4 Years About Me: &ensp; <span className='text-red-400 italic underline'>Click One to Choose</span></p>
      </div>
      <div className=' mt-5 ml-10 mr-10 md:ml-44 md:mr-44 gap-y-10 grid grid-cols-2 justify-between '>
        <div className=' justify-center flex'><div className='justify-center flex w-28'><div className='year__item border border-black rounded-lg w-28 h-14 flex justify-center items-center text-2xl text-white years__tags md:hover:animate-pulse cursor-pointer active:text-blue-300 active:border-blue-300'><button className='p-3' onClick={() => setTW_NINE(!NINE)}> 2019</button></div></div></div>     
        <div className=' justify-center flex'><div className='justify-center flex w-28'><div className='year__item border border-black rounded-lg w-28 h-14 flex justify-center items-center text-2xl text-white years__tags md:hover:animate-pulse cursor-pointer active:text-blue-300 active:border-blue-300'><button className='p-3' onClick={()=>setTW_TEN(!TEN)}> 2020</button></div></div></div>
        <div className=' justify-center flex'><div className='justify-center flex w-28'><div className='year__item border border-black rounded-lg w-28 h-14 flex justify-center items-center text-2xl text-white years__tags md:hover:animate-pulse cursor-pointer active:text-blue-300 active:border-blue-300'><button className='p-3' onClick={()=>setTW_ELEVEN(!ELEVEN)}> 2021</button></div></div></div>
        <div className=' justify-center flex'><div className='justify-center flex w-28'><div className='year__item border border-black rounded-lg w-28 h-14 flex justify-center items-center text-2xl text-white years__tags md:hover:animate-pulse cursor-pointer active:text-blue-300 active:border-blue-300'><button className='p-3' onClick={()=>setTW_TWELVE(!TWELVE)}> 2022</button></div></div></div>
      </div>
      {NINE?<div className='h-40 border border-black rounded-lg mt-10 ml-10 mr-10 md:ml-52 md:mr-52 lg:ml-60 lg:mr-60 bg-blue-200 bg-opacity-30'>
          <div className='border-b border-black text-white italic underline text-2xl rounded-t-lg flex items-center justify-center bg-white bg-opacity-30'><p>2019</p></div>
          <div className='flex items-center justify-center mt-10 '><p className='text-red-600 text-2xl italic'>{props.nine}</p></div>
        </div>:null}

      {TEN?<div className='h-40 border border-black rounded-lg mt-10 ml-10 mr-10 md:ml-52 md:mr-52 lg:ml-60 lg:mr-60 bg-blue-200 bg-opacity-30'>
          <div className='border-b border-black text-white italic underline text-2xl rounded-t-lg flex items-center justify-center bg-white bg-opacity-30'><p>2020</p></div>
          <div className='flex items-center justify-center mt-10 '><p className='text-red-600 text-2xl italic'>{props.ten}</p></div>
        </div>:null}

      {ELEVEN?<div className='h-40 border border-black rounded-lg mt-10 ml-10 mr-10 md:ml-52 md:mr-52 lg:ml-60 lg:mr-60 bg-blue-200 bg-opacity-30'>
          <div className='border-b border-black text-white italic underline text-2xl rounded-t-lg flex items-center justify-center bg-white bg-opacity-30'><p>2021</p></div>
          <div className='flex items-center justify-center mt-10 '><p className='text-red-600 text-2xl italic'>{props.eleven}</p></div>
        </div>:null}

      {TWELVE?<div className='h-40 border border-black rounded-lg mt-10 ml-10 mr-10 md:ml-52 md:mr-52 lg:ml-60 lg:mr-60 bg-blue-200 bg-opacity-30'>
          <div className='border-b border-black text-white italic underline text-2xl rounded-t-lg flex items-center justify-center bg-white bg-opacity-30'><p>2022</p></div>
          <div className='flex items-center justify-center mt-10 '><p className='text-red-600 text-2xl italic'>{props.twelve}</p></div>
        </div>:null}

    </>
  );
}

class ABOUTME__SECTION extends React.Component {
  
  layout = {id: Number, year: Number, content: ''}

  state = {
    /* Years */
    NINE: this.layout,
    TEN: this.layout, 
    ELEVEN: this.layout, 
    TWELVE: this.layout
  }

  componentDidMount() {
    fetch('http://localhost:3000/showyears')
    .then(res => res.json())
    .then(data => this.setState({NINE: [data[0].id, data[0].year, data[0].content], TEN: [data[1].id, data[1].year, data[1].content],
                               ELEVEN: [data[2].id, data[2].year, data[2].content], TWELVE: [data[3].id, data[3].year, data[3].content]}))
  }
  
  render() {
    return(
      <>
      <ABTMES nine={this.state.NINE[2]} ten={this.state.TEN[2]} eleven={this.state.ELEVEN[2]} twelve={this.state.TWELVE[2]}/>
      </>
    );
  }
  
}

const PROJECTS__CONTENT = () => {
  return (
    <>
      <section id="projects__section"></section>
        <div className='mt-14 ml-5 mr-5 flex justify-center w-fit text-3xl md:text-4xl section__tag'>
          <h1>Projects</h1>
        </div>
        <div className='p__c mt-5 ml-10 mr-10 md:ml-20 md:mr-20 mcs:mr-40 mcs:ml-40 2xl:mr-52 2xl:ml-52 pgs:mr-56 pgs:ml-56 grid grid-cols-1 r-md:grid-cols-2 gap-y-8 pcs:gap-x-5'>
          {/* ONE */}
            <div className='border border-black justify-center rounded-lg r-md:mr-1 grid grid-cols-1' id="proj_container">
              <div className='rounded-t-lg h-80 flex justify-center items-center border-b-2 border-black' id="proj__content__one"><div className=''><p className='italic text-2xl text-red-600 underline'>Coming</p></div></div>
              <div className='rounded-b-lg h-40 flex self-end justify-center items-center' id="proj__content__two"><div className=''><p className='italic text-2xl text-red-600 underline'>Soon</p></div></div>
            </div>
          {/* TWO */}
            <div className='border border-black justify-center rounded-lg r-md:mr-1 grid grid-cols-1' id="proj_container">
              <div className='rounded-t-lg h-80 flex justify-center items-center border-b-2 border-black' id="proj__content__one"><div className=''><p className='italic text-2xl text-red-600 underline'>Coming</p></div></div>
              <div className='rounded-b-lg h-40 flex self-end justify-center items-center' id="proj__content__two"><div className=''><p className='italic text-2xl text-red-600 underline'>Soon</p></div></div>
            </div>
          {/* THREE */}
            <div className='border border-black justify-center rounded-lg r-md:mr-1 grid grid-cols-1' id="proj_container">
              <div className='rounded-t-lg h-80 flex justify-center items-center border-b-2 border-black' id="proj__content__one"><div className=''><p className='italic text-2xl text-red-600 underline'>Coming</p></div></div>
              <div className='rounded-b-lg h-40 flex self-end justify-center items-center' id="proj__content__two"><div className=''><p className='italic text-2xl text-red-600 underline'>Soon</p></div></div>
            </div>    
          {/* FOUR */}
            <div className='border border-black justify-center rounded-lg r-md:mr-1 grid grid-cols-1' id="proj_container">
              <div className='rounded-t-lg h-80 flex justify-center items-center border-b-2 border-black' id="proj__content__one"><div className=''><p className='italic text-2xl text-red-600 underline'>Coming</p></div></div>
              <div className='rounded-b-lg h-40 flex self-end justify-center items-center' id="proj__content__two"><div className=''><p className='italic text-2xl text-red-600 underline'>Soon</p></div></div>
            </div>
        </div>
    </>
  );
}

const CONTACT__SECTION = () => {
  return (
    <>
      <section id="contact__section"></section>
      <div className='mt-14 ml-5 mr-5 justify-center w-fit text-3xl md:text-4xl section__tag grid grid-cols-1'>
        <h1>Contact</h1>
      </div>
      <div className='mt-5 mb-14 ml-20 mr-20'>
        <div className='text-white opacity-80 text-2xl'>My Contact Info:</div>
        <ul>
          <li>
            <p className='text-white opacity-80 text-xl mt-5'>Email: &ensp; jaydingulley04@gmail.com</p>
          </li>
          <li>
            <p className='text-white opacity-80 text-xl mt-5'>Phone: &ensp; +1(618)-504-9355</p>
          </li>
        </ul>
      </div>
    </>
  );
}

class BODY__CONTENT extends React.Component {
  render() {
    return (
      <div className='translate-y-14 md:mr-4 md:ml-4 lg:mr-28 lg:ml-28 xl:mr-44 xl:ml-44 2xl:mr-72 2xl:ml-72 pgs:mr-96 pgs:ml-96 items-center body__container'>
        <div className='w-full'>
          <ABOUTME__SECTION />
          <PROJECTS__CONTENT />
          <CONTACT__SECTION />
          <br/><br/><br/>
        </div>
      </div>
    );
  }
}

class FOOTER extends React.Component {
  render() {
    return (
      <div className='grid grid-cols-2 h-14 w-full bg-black bg-opacity-40 border-t border-black'>
        <div className='text-white opacity-80 text-sm flex items-center justify-center ml-14'>ⓒ - 2022</div>
        <div className='text-white opacity-40 items-center justify-center flex italic'>"Knowledge Makes Power." - Jay</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <NAVBAR />
      <main>
        <BODY__CONTENT />
      </main>
      <FOOTER />
    </div>
  );
}
export default App;
