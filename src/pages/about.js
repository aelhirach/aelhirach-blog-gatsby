import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import { AiFillRightCircle } from "react-icons/ai"

import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"


const MyTechTag = (props) => {
    const { tech, name, size, color } = props
    return (
        <div className="d-inline-block p-1">
                <button className="tech-tag text-white">
                    <p className="d-inline">{tech} </p>
                    <div className="d-inline" style={{ fontSize: size, color: color }}><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{fill: `${color}`}}>
                            <title>{tech}</title>
                            <path
                                d={name} />
                        </svg></div>
                </button>
        </div>
    )
}



const AboutPage = (props) => {
    const labels = props.data.site.siteMetadata.labels
    const aboutTags = ["react", "git", "python", "nodejs", "expo", "xcode", "atom", "vscode", "gitkraken", "slack", "teams", "javascript", "html", "postgresql", "firebase", "gatsby","unity", "csharp", "swift","swiftui"]
    const tags = {}

    labels.forEach(label => {
        aboutTags.forEach(tag => {
            if (tag === label.tag) {
                tags[tag] = label.name
            }
        })
    })

    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                            <p>I'm EL HIRACH ABDERRAZZAK, an IT industrial engineer (comparable to Master’s Degree in Computer Science), I'm working as Mobile Apps & Games Engineer (iOS & Android) originally from Morroco <span role="img" aria-label="sheep">🇲🇦</span> but have been
                               living in the beautiful city of Brussels <span role="img" aria-label="sheep">🇧🇪</span>  since 2012, I'am also interested in Video streaming & TV production technologies,
                               specially the A/V transcoding & professional codecs. I like also staying up to date about aeronautics digital technologies and crash investigations.
                               Sometimes I'am also cooking (to be accurate trying) and sometimes it turns out to be awesome <span role="img" aria-label="sheep">😋</span> , and lastly I'm a good football goalkeeper <span role="img" aria-label="sheep">🥅 ⚽</span> .
                            </p>
                        <br />
                        <h3>Skills</h3>
                        <div>
                            <span className="text-success d-inline" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline ml-2 align-top">I build native & cross-platform games & mobile apps from idea to stores using : Swift, Objectif C, React-Native and Unity 3D : </p>
                        </div>
                        <br/>
                        <div className="ml-5">
                              <MyTechTag tag="swift" tech="Swift" name={tags["swift"]} size={20} color="orange" />
                              <MyTechTag tag="swiftui" tech="SwiftUI" name={tags["swiftui"]} size={20} color="deepskyblue" />
                              <MyTechTag tag="xcode" tech="Xcode" name={tags["xcode"]} size={20} color="deepskyblue" />
                        </div>
                        <ul className="list-group">

                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> I'm always up to date with the latest and the greatest technology released by Apple.</li>
                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> I have three years of professional experience as an iOS developer with Swift and Objective-C. 
                            </li>

                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> I implement security best practices for the mobile applications such as KeyChain, Certificate Pinning etc.
                            </li>
                            <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" >
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> I use design patters like MVC, MVVM, MVP, composition, protocol oriented programming.
                            </li>
                            <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" >
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> I have an excellent knowledge about the SwiftUI Scenes, Views, Modifiers, Stacks, Containers, State management system and Data flow.
                            </li>

                            <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> I implement modular architecture using dynamic frameworks.
                            </li>
                            <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> I have an excellent understanding of UIKit, Core Animation, GCD, Core Data and WatchKit.
                            </li>
                            <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> I can implement CI (continuous integration) set up using Xcode Server, Jenkins, Git.
                            </li>
                            <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> I have a good Experience with UI Test automation and XCTest.
                            </li>
                        </ul>
                        <br/>
                        <div className="ml-5">
                            <MyTechTag tag="react" tech="React Native" name={tags["react"]} size={20} color="skyblue" />
                            <MyTechTag tag="expo" tech="Expo" name={tags["expo"]} size={20} color="white" />
                            <MyTechTag tag="atom" tech="Atom" name={tags["atom"]} size={20} color="lightgreen" />
                            <MyTechTag tag="vscode" tech="VS Code" name={tags["vscode"]} size={20} color="deepskyblue" />
                        </div>

                          <ul className="list-group">
                              <li className="d-inline-block ml-3 align-top">
                              <span className="text-success d-inline-block" title="blazing">
                                  <AiFillRightCircle size={18} style={{ color: "orange" }} />
                              </span> I use the Expo framework (Managed and bare workflows).</li>
                              <li className="d-inline-block ml-3 align-top">
                              <span className="text-success d-inline-block" title="blazing">
                                  <AiFillRightCircle size={18} style={{ color: "orange" }} />
                              </span> I use React Native Debugger & Google Chrome Developpement Tools.
                              </li>
                              <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" >
                                  <AiFillRightCircle size={18} style={{ color: "orange" }} />
                              </span> I use both Hooks and class component to build React-Native Apps.
                              </li>
                              <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                                  <AiFillRightCircle size={18} style={{ color: "orange" }} />
                              </span> I use Atom IDE and Visual Code.
                              </li>
                          </ul>
                          <br/>
                          <div className="ml-5">
                              <MyTechTag tag="unity" tech="Unity 3D" name={tags["unity"]} size={20} color="skyblue" />
                              <MyTechTag tag="csharp" tech="C Sharp" name={tags["csharp"]} size={20} color="pink" />
                          </div>

                          <ul className="list-group">
                              <li className="d-inline-block ml-3 align-top">
                              <span className="text-success d-inline-block" title="blazing">
                                  <AiFillRightCircle size={18} style={{ color: "orange" }} />
                              </span> I have a good knowledge of Unity, including experience with C# scripting, textures, animation, GUI styles to develop 2D mobile games.</li>
                              <li className="d-inline-block ml-3 align-top">
                              <span className="text-success d-inline-block" title="blazing">
                                  <AiFillRightCircle size={18} style={{ color: "orange" }} />
                              </span> I use artificial intelligence (AI) algorithms to make brain puzzles games.
                              </li>
                          </ul>
                        <br/>

                        <div >
                            <span className="text-success d-inline" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline ml-2 align-top">I develop a general purpose applications using many languages : </p>
                        </div>
                      <br/>
                        <div className="ml-5">
                            <MyTechTag tag="python" tech="Python" name={tags["python"]} size={20} color="skyblue" />
                            <MyTechTag tag="csharp" tech="C Sharp" name={tags["csharp"]} size={20} color="pink" />
                            <MyTechTag tag="react" tech="React js" name={tags["react"]} size={20} color="deepskyblue" />
                            <MyTechTag tag="gatsby" tech="Gatsby" name={tags["gatsby"]} size={20} color="rebeccapurple" />
                            <MyTechTag tag="html" tech="Html" name={tags["html"]} size={20} color="darkorange" />
                            <MyTechTag tag="nodejs" tech="Node js" name={tags["nodejs"]} size={20} color="lightgreen" />
                            <MyTechTag tag="javascript" tech="Javascript" name={tags["javascript"]} size={20} color="yellow" />

                        </div>

                        <ul className="list-group">
                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> I use Python packages such as Scikit learn, MatPlotib, NumPy, etc. for Data Science, Mathematics, Probability and Statistics.
                        </li>
                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> I have a very good knowledge in Artificial Intelligence, Machine Learning and Deep Learning Skill.
                        </li>
                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> I develop SOA Microsoft applications using C#, WCF, Windows Forms, WPF, etc.
                        </li>
                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> I have a good proficiency in JavaScript, including DOM manipulation and the JavaScript object model (JSON).
                        </li>
                        <li className="d-inline-block ml-3  align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> I developed this awesome website with Gatsby and React js.
                        </li>
                        <li className="d-inline-block ml-3  align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> I use modern authorization mechanisms, such as JSON Web Token.
                        </li>
                        <li className="d-inline-block ml-3  align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> Good Knowledge of Node.js Frameworks, RESTful APIs and API Communications.
                        </li>
                        </ul>

                        <br/>
                        <div >
                            <span className="text-success d-inline" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline ml-2 align-top">Software development and database management skills : </p>
                        </div>
                        <br/>
                        <div className="ml-5">
                            <MyTechTag tag="gitkraken" tech="Gitkraken" name={tags["gitkraken"]} size={20} color="darkseagreen" />
                            <MyTechTag tag="git" tech="Git" name={tags["git"]} size={20} color="darkorange" />
                            <MyTechTag tag="slack" tech="Slack" name={tags["slack"]} size={20} color="lightgreen" />
                            <MyTechTag tag="teams" tech="Teams" name={tags["teams"]} size={20} color="skyblue" />
                            <MyTechTag tag="postgresql" tech="PostgreSQL" name={tags["postgresql"]} size={20} color="deepskyblue" />
                            <MyTechTag tag="firebase" tech="FireBase" name={tags["firebase"]} size={20} color="yellow" />


                        </div>

                        <ul className="list-group">

                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span>  I use Scrum project management methodology, git version control system and GitKraken Tool.
                        </li>

                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> I'm familiar with Teams and Slack channels.
                        </li>

                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> I have a general proficiency of Unit testing, code coverage, reviewing, refactoring, continuous integration and code-smell concepts.
                        </li>

                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                          <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> I have a good knowledge of CRUD operations, interfacing with different layers of the development frame work and ORMs.
                        </li>
                        <li className="d-inline-block ml-3  align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> I create NoSQL database : PostgreSQL, FireBase and SQLite Database.
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutQuery {
        site {
            siteMetadata {
                labels {
                    tag
                    tech
                    name
                    size
                    color
                }
            }
        }
    }
`

export default AboutPage
