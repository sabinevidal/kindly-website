import {HashLink as Link} from "react-router-hash-link";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import KindlyForm from './components/KindlyForm'
import IconArrowDownWhite from './img/icon-arrow-down-white.svg';
import IconArrowDownBlue from './img/icon-arrow-down-blue.svg';
import IconSend from './img/icon-send.svg';
import UNICEFLogo from './img/unicef-logo.png';

function Message(props){
  return(
      <div className="cover-rectangle">
        <table>
          <tbody>
            <tr>
              <td className="cover-text">{props.text}</td>
              <td className="align-bottom"><img src={IconSend} className="Iconsend" alt="Inactive Submit Button"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}


function App() {
  return (
    <main>
      <div className="cover-container d-flex w-100 vh-100 p-3 mx-auto flex-column text-center background-blue">
        <div className="cover-cover text-center mt-auto">
          <div className="cover-title">
            See how messages can<br />
            be rethought, Kindly
          </div>
        </div>

        <footer className="cover-footer mt-auto">
          <Link to="#about" className="text-decoration-none text-white">
            <span>Learn about Kindly</span><br/>
            <img src={IconArrowDownWhite} className="icon-arrow-down" alt="Downward Arrow"/>
          </Link>
        </footer>

        <div className="background container-fluid vh-100">
          <div className="row mt-5">
            <div className="col-2 offset-3">
              <Message text={<span>ur&nbsp;so&nbsp;ugly</span>} />
            </div>
            <div className="col-4 offset-3">
              <Message text={<span>
                      omg&nbsp;did&nbsp;you&nbsp;see&nbsp;what<br/>
                      they&nbsp;did&nbsp;yesterday?!<br/>
                      what&nbsp;idiots</span>}/>
            </div>
          </div>
          <div className="row">
            <div className="col-3 offset-1">
              <Message text={<span>Cool!&nbsp;See&nbsp;you&nbsp;there!</span>} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>

          <div className="row">
            <div className="col-3 offset-9">
              <Message text={<span>No&nbsp;that's&nbsp;so&nbsp;dumb</span>} />
            </div>
          </div>

          <div className="row">
            <div className="col-3 offset-2">
              <Message text={<span>The&nbsp;Moana&nbsp;movie&nbsp;is<br />
                great&nbsp;I&nbsp;liked&nbsp;it,&nbsp;but&nbsp;not<br/>
                the&nbsp;scary&nbsp;parts.&nbsp;Those<br/>
                just&nbsp;freak&nbsp;me&nbsp;out</span>} />
            </div>
          </div>

          <div className="row">
            <div className="col-3 offset-8">
              <Message text={<span>umm&nbsp;yeah&nbsp;I&nbsp;think<br/>
                that&nbsp;will&nbsp;be&nbsp;okay</span>} />
            </div>
          </div>

        </div>
      </div>

      <div className="px-4 p-5 cover-unicef" id="about">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-5 offset-1">
            <img src={UNICEFLogo} width="490" alt="UNICEF Logo" className="d-block mx-lg-auto img-fluid" loading="lazy"/>
          </div>
          <div className="col-lg-3 offset-2">
            <p className="lead text-left">Kindly is the product of a collaboration between UNICEF and Gitanjali Rao, a young innovator.</p>
          </div>
        </div>
      </div>

      <div className="px-4 p-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-5 offset-1">
            <h1 className="">Kindly is an API that uses Machine Learning to identify 'toxic' messages.</h1>  
            <p className="lead">Kindly evaluates messages before they are sent and offers users the chance to modify them.</p>
            <p className="lead">Kindly aims to make children feel safer by leveraging the latest advances in technology and by empowering children to solve this pressing challenge.</p>
          </div>
        </div>
        <footer className="cover-footer mt-auto mx-auto text-center">
          <Link to="#test-kindly" className="text-decoration-none text-blue">
            <span>Test Kindly</span><br/>
            <img src={IconArrowDownBlue} className="icon-arrow-down" alt="Downward Arrow"/>
          </Link>
        </footer>
      </div>

      <div className="px-4 p-5 background-blue text-white" id="test-kindly">
        <div className="row align-items-center g-5 py-5 mb-5">
          <div className="col-lg-5 offset-1">
            <h1 className="mb-5">Kindly aims to end cyberbullying, one message at a time.</h1>  
            <p className="lead"><b>Test Kindly for yourself!</b></p>
            <p >Reply to the message and check your entry with Kindly to see if your message is toxic or considered cyberbullying.</p>
          </div>
          <div className="col-lg-5 offset-1">
            <KindlyForm />
          </div>
        </div>
        <footer className="cover-footer mt-5 mx-auto text-center">
          <span>How Kindly works</span><br/>
          <img src={IconArrowDownWhite} className="icon-arrow-down" alt="Downward Arrow"/>
        </footer>
      </div>

      <div className="px-4 p-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-7 text-center mx-auto">
            <h1 className="">Think <i>Grammerly</i>,<br/> but for cyberbullying</h1>  
            <p className="text-grey">When integrated with existing text-based platforms, Kindly allows users choose to check and edit their messages for toxic intent.</p>
          </div>
        </div>
        <div className="row align-items-center g-5 py-5 px-5">
          <div className="col-lg-4 text-center mx-auto">
            <p><b>Check the message</b></p>
            <p>Users prompt Kindly to evaluate their message draft for toxic text or cyberbullying intent</p>
          </div>
          <div className="col-lg-4 text-center mx-auto">
            <p><b>View feedback</b></p>
            <p>Users prompt Kindly to evaluate their message draft for toxic text or cyberbullying intent</p>
          </div>
          <div className="col-lg-4 text-center mx-auto">
            <p><b>Send final message</b></p>
            <p>Users prompt Kindly to evaluate their message draft for toxic text or cyberbullying intent</p>
          </div>
        </div>
        <footer className="cover-footer mt-auto mx-auto text-center">
          <Link to="#why-kindly" className="text-decoration-none text-blue">
            <span>Why Kindly?</span><br/>
            <img src={IconArrowDownBlue} className="icon-arrow-down" alt="Downward Arrow"/>
          </Link>
        </footer>
      </div>

      <div className="px-4 p-5 background-black">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-7 text-center mx-auto text-white text-center">
            <h2>One-third of the globe’s youth is bullied. It affects everyone: 
            those who are bullied, those who bully others, and those who witness
            bullying. And it doesn’t stop in the physical world. It happens
            online, too.</h2>
          </div>
        </div>
      </div>

      <div className="px-4 p-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-7 text-center mx-auto">
            <h1 className="">Kindly is a uniquely qualified solution to eliminate cyberbullying</h1>  
            <p className="text-grey">Partners Gitanjali Rao and UNICEF provide the principles that make Kindly an excellent digital tool that empowers children.</p>
          </div>
        </div>
        <div className="row align-items-center g-5 py-5 px-5">
          <div className="col-lg-4 text-center mx-auto">
            <p>&nbsp;</p>
          </div>
          <div className="col-lg-5 mx-auto">
            <p className="unicef-blue-section-header">Protection of childen's rights and data</p>
            <p>To take full account of children’s issues and rights online,
            UNICEF has developed a Manifesto for data governance to protect
            children’s data and their rights and prioritize children’s best
            interests. Thus, UNICEF is uniquely positioned to provide strong
            child data protection guarantees and offer a trusted digital
            public good that puts children first.</p>
          </div>
        </div>

        <div className="row align-items-center g-5 py-5 px-5">
          <div className="col-lg-5 mx-auto">
            <p className="unicef-blue-section-header">An open-source solution for anyone to contribute</p>
            <p>By developing Kindly as an open-source solution, UNICEF encourages
            and empowers children to be part of the solution to a challenge that
            many of them face directly. Kindly provides systems of iterative
            improvement that allows the tool to meet the specific needs of
            different communities.</p>
          </div>
          <div className="col-lg-4 text-center mx-auto">
            <p>&nbsp;</p>
          </div>
        </div>

        <div className="row align-items-center g-5 py-5 px-5">
          <div className="col-lg-4 text-center mx-auto">
            <p>&nbsp;</p>
          </div>
          <div className="col-lg-5 mx-auto">
            <p className="unicef-blue-section-header">Engaging children directly in a solution to cyberbullying</p>
            <p>While similar services to Kindly exist in the market, they do not
            engage children in the way Kindly aims to. Kindly  gives children
            themselves the power to eliminate cyberbullying by checking their
            messages, and centers their own safety and protections in the solution.</p>
          </div>
        </div>
      </div>

      <div className="px-4 p-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-7 mx-auto">
          <h2>Frequently Asked Questions</h2>

          </div>
        </div>
      </div>

      <div className="px-4 p-5 background-blue text-white">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-7 mx-auto text-center">
            <h2>Join us in ending cyberbullying</h2>
          </div>
        </div>
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-4 mx-auto text-center">
            <p className="lead">Stay updated</p>
            <p>Keep up with Kindly’s progress by accessing the UNICEF/Kindly software repository</p>
            <Button variant="outline-light" style={{minWidth: "12em"}}>Software Repository</Button>
          </div>
          <div className="col-lg-4 mx-auto text-center">
            <p className="lead">Learn more</p>
            <p>Connect with Kindly to learn more about Kindly or to explore a partnership role with us</p>
            <Button variant="outline-light" style={{minWidth: "12em"}}>Email us</Button>
          </div>
        </div>
      </div>

      <div className="px-4 p-5 background-black text-white">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-4 mx-auto">
            <h1>Kindly</h1>
            <p>Kindly is he product of innovator Gitanjali Rao and UNICEF's collaboration</p>
          </div>
          <div className="col-lg-4 mx-auto text-white">
            <div className="row mb-2">
              <Link to="#test" className="text-decoration-none text-white ">
                <span>Test Kindly</span>
              </Link>
            </div>
            <div className="row mb-2">
              <Link to="https://github.org/unicef/kindly" className="text-decoration-none text-white">
                <span>Access Software Repository</span>
              </Link>
            </div>
            <div className="row mb-2">
              <Link to="#test" className="text-decoration-none text-white">
                <span>Contact Kindly</span>
              </Link>
            </div>
            
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;