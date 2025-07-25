import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import { AiFillRightCircle } from "react-icons/ai"

import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"


const MyTechTag = (props) => {
    const { tech, viewBox, name, width, height, color } = props
    return (
        <div className="d-inline-block p-1">
                <button className="tech-tag text-white">
                    <p className="d-inline">{tech} </p>
                    <div className="d-inline" style={{ fontSize: height, color: color }}>
                        <svg role="img" viewBox= {viewBox || "0 0 24 24"} xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={{fill: `${color}`}}>
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
    const aboutTags = ["react", "apollo", "artemis", "kotlin", "java", "spring", "git", "ruby", "rails", "python", "nodejs", "expo", "xcode", "atom", "vscode", "gitkraken", "slack", "teams", "javascript", "html", "postgresql", "firebase", "gatsby","unity", "csharp", "swift","swiftui"]
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
                            <p>I'm EL HIRACH ABDERRAZZAK, an IT industrial engineer (comparable to Master’s Degree in Computer Science), I'm working as Software Engineer for Belgian Radio-television of the French Community (RTBF). I'm originally from Morroco <span role="img" aria-label="sheep">🇲🇦</span> but have been
                               living in the beautiful city of Brussels <span role="img" aria-label="sheep">🇧🇪</span> since 2012, I'am also interested in Video streaming & TV production technologies,
                               especially the A/V transcoding & professional codecs. I like also staying up to date about aeronautics digital technologies and crash investigations.
                               Sometimes I'am also cooking (to be accurate trying) and sometimes it turns out to be awesome <span role="img" aria-label="sheep">😋</span>. Finally, I'm a good football goalkeeper <span role="img" aria-label="sheep">🥅 ⚽</span> .
                            </p>
                        <br />
                        <h3>Core Skills</h3>
                        
                       {/* -----------  Java & Kotlin skills ----------- */}

                        <div>
                            <span className="text-success d-inline" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline ml-2 align-top">I'm a Java Spring Developer who enjoys building reliable and easy-to-use backend systems. I have experience working with Spring Boot to create web applications, REST APIs, and microservices. I focus on writing clean code that is easy to understand and maintain. : </p>
                        </div>

                        <br/>
                        <div className="ml-5">
                              <MyTechTag tag="java" tech="Java" name={tags["java"]} width={20} height={20} color="red" />
                              <MyTechTag tag="kotlin" tech="Kotlin" name={tags["kotlin"]} width={20} height={20} color="deepskyblue" />
                              <MyTechTag tag="spring" tech="Spring" name={tags["spring"]} width={20} height={20} color="#6DB33F" />
                        </div>
                        <ul className="list-group">

                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>Java :</strong> Null safety, data classes, extension functions, smart casts, default & named arguments, higher-order functions, lambdas, sealed classes, enums, coroutines, type inference, and concise syntax. </li>
                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>Kotlin :</strong> OOP, AOP &  DI Principles, Java APIs, Collections, Streams, IO, Multithreading & Concurrency, Log4j/Kibana, Maven. </li>
                
                    
                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> <strong>Spring :</strong> Spring IoC, Spring boot, Hibernate, Spring Data JPA, Spring Security 6 (JWT, OUTH2, OpenID Connect, keycloak), Spring AOP/AspectJ, Spring MVC, HATEOAS, Lombok, Thymeleaf.
                            </li>

                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> <strong>Architectural & Design Patterns :</strong> MVC, Serverless, Layers, Creational, (Singleton, Builder,...), Structural (Proxy,...), Behavioural (Observer, Strategy...).
                            </li>
                            <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" >
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> <strong>Micro-services architecture : </strong> Stack Spring Cloud Netflix (Eureka server, Gateway, LoadBalancer, Config Server, DiscoveryClient, Actuator) , HashiCorp Consul, Vault, Resilience4J,  RestTemplate, OpenFeign, Jersey.    
                            </li>                       
                        </ul>

                        <br/>

                        {/* -----------  Frontend ----------- */}

                        <div>
                            <span className="text-success d-inline" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline ml-2 align-top">Proficient in frontend development, with hands-on experience building websites using various technologies including React, Angular, Vue.js, and modern UI libraries. </p>
                        </div>
                        <div className="ml-5">
                              <MyTechTag tag="react" tech="React js" name={tags["react"]} width={20} height={24} color="deepskyblue" />
                              <MyTechTag tag="gatsby" tech="Gatsby" name={tags["gatsby"]} width={20} height={24} color="rebeccapurple" />
                              <MyTechTag tag="html" tech="Html" name={tags["html"]} width={20} height={24} color="darkorange" />
                              <MyTechTag tag="nodejs" tech="Node js" name={tags["nodejs"]} width={20} height={24} color="lightgreen" />
                              <MyTechTag tag="javascript" tech="Javascript" name={tags["javascript"]} width={20} height={24} color="yellow" />
                              <MyTechTag tag="ruby" tech="Ruby " name={tags["ruby"]} width={24} height={24} color="red" />
                              <MyTechTag tag="rails" tech="Rails" name={tags["rails"]} viewBox="5 5 20 20" width={40} height={24} color="red" />
                        </div>

                        <ul className="list-group">
                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>Frontend Technologies :</strong> Javascript ES6, Typescript, HTML5 & CSS3, Bootstrap, AJAX, HTTP, Build Tools (Npm, Vite, Webpack, Parcel, HMR,...). </li>

                            
                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>Nodejs :</strong> Good Knowledge of Node.js Frameworks, Express, webRTC, Sequelize & Mongoose ORMs, RESTful APIs and API Communications. </li>
                           
    
                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>React :</strong> Vite/Nextjs/Gatsby, Hooks, State Management (Redux, Context API) and Thunk, styled-Components, material-ui, i18next, Axios & Fetch.  </li>
                            
                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>Angular :</strong> component-based architecture, Services (data sharing), Directives, Pipes, Dependency Injection, Routing & Navigation, HttpClientModule, HttpInterceptor pipeline, Rxjs (Observables, Observer, Operators,...).  </li>
                            
                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>Vuejs :</strong> reactive data binding, Vue Router, Vuex (state management), Composition API, directives, filters, lifecycle hooks, watchers for reactive data observation, computed properties, mixins, custom directives, Axios integration, Vue CLI, i18n (vue-i18n). </li>


                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>Ruby on Rails :</strong> Experienced in developing, testing, and deploying web applications and APIs with Ruby on Rails, utilizing gems like Devise, react_on_rails, and active_model_serializers.. </li>
              
                          </ul>
    
                        <br/>
                       
                        {/* -----------  Databases, Softwares & Tools ----------- */}
                        <div >
                            <span className="text-success d-inline" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline ml-2 align-top">Software development and database management skills : </p>
                        </div>
                        <br/>
                        <div className="ml-5">
                            <MyTechTag tag="git" tech="Git" name={tags["git"]} width={20} height={20} color="darkorange" />
                            <MyTechTag tag="slack" tech="Slack" name={tags["slack"]} width={20} height={20} color="lightgreen" />
                            <MyTechTag tag="teams" tech="Teams" name={tags["teams"]} width={20} height={20} color="skyblue" />
                            <MyTechTag tag="postgresql" tech="PostgreSQL" name={tags["postgresql"]} width={20} height={20} color="deepskyblue" />
                            <MyTechTag tag="firebase" tech="FireBase" name={tags["firebase"]} width={20} height={20} color="yellow" />
                            <MyTechTag tag="apollo" tech="Apollo" name={tags["apollo"]} width={20} height={20} color="#290ba0" />
                            <MyTechTag tag="artemis" tech="ActiveMQ Artemis" name={tags["artemis"]} width={20} height={20} color="white" />
                            <MyTechTag tag="neo4j" tech="Neo4j" name={tags["neo4j"]} width={20} height={20} color="#0088bb" />
                            <MyTechTag tag="elasticsearch" tech="ElasticSearch" name={tags["elasticsearch"]} width={20} height={20} color="#fed10a" />

                        </div>

                        <ul className="list-group">
                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span>  <strong>Data exchange : </strong> JSON, XML, Cookies, REST, SOAP, GraphQL, gRPC, Webhook,... 
                        </li>

                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> <strong>Testing : </strong> Unit testing, code coverage, reviewing, refactoring, continuous integration and code-smell concepts (JUnit, AssertJ, Mockito, Pac, Jest, Mocha, Cucumber, Selenium, Cypress.)
                        </li>
                        
                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> <strong>Project management :</strong> Agile (Scrum), Jira, Confluence, Slack, Teams, Outlook...

                        </li>

                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> <strong>CI/CD pipeline :</strong>  Gitlab CI/CD, Jetkins pipelines, SonarQube, TDD & BDD principles.
                        </li>

                        <li className="d-inline-block ml-3 align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> <strong>Containerization and Virtualization :</strong> Developed and deployed containerized applications using Docker and orchestrated scalable services with Kubernetes in a cloud-native environment (rancher).
                        </li>

                        <li className="d-inline-block ml-3  align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span><strong> SQL & NoSQL databases :</strong> I have a good experience with Oracle, MySQL, PostgreSQL, FireBase and SQLite Databases.
                        </li>
                        <li className="d-inline-block ml-3  align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> <strong>Grpah Database :</strong> I integrated Neo4j into backend systems to manage interconnected data and developed efficient Cypher queries.
                        </li>
                            <li className="d-inline-block ml-3  align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> <strong> Apollo : </strong> I maintained Apollo Server as a Backend-for-Frontend (BFF) layer to aggregate and tailor GraphQL APIs for frontend needs, integrated with Apollo Client for efficient data fetching and caching.
                        </li>
                        <li className="d-inline-block ml-3  align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> <strong>ActiveMQ Artemis :</strong> I maintained reliable asynchronous messaging with Java JMS using ActiveMQ Artemis queues and topics for scalable service communication.
                        </li>
                         <li className="d-inline-block ml-3  align-top"><span className="text-success d-inline-block" title="blazing">
                            <AiFillRightCircle size={18} style={{ color: "orange" }} />
                        </span> <strong>Elastic Stack : </strong> Experienced in using the Elastic Stack (Logback, Logstash, Elasticsearch, Kibana) for centralized logging, real-time monitoring, and search analytics.
                        </li>

                       
                        </ul>

                        <br/>
                        <h3>Relevant Experience</h3>

                         {/* -----------  Mobile iOs & React ----------- */}
                        <div>
                            <span className="text-success d-inline" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline ml-2 align-top">Experienced in iOS development using Swift/SwiftUI, with a solid background in building high-quality native apps, along with additional experience in cross-platform mobile development using React Native. </p>
                        </div>

                        <br/>
                        <div className="ml-5">
                              <MyTechTag tag="swift" tech="Swift" name={tags["swift"]} width={20} height={20} color="orange" />
                              <MyTechTag tag="swiftui" tech="SwiftUI" name={tags["swiftui"]} width={20} height={20} color="deepskyblue" />
                              <MyTechTag tag="xcode" tech="Xcode" name={tags["xcode"]} width={20} height={20} color="deepskyblue" />
                        </div>
                        <ul className="list-group">

                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />
                            </span> 
                            <strong>iOS Development :</strong> 4+ years of experience with Swift, Objective-C, SwiftUI, UIKit, MVVM/MVC, modular architecture, Core Data, WatchKit, security best practices (Keychain, certificate pinning), CI/CD, and UI test automation with XCTest. </li>

                        </ul>
                        <br/>
                        <div className="ml-5">
                            <MyTechTag tag="react" tech="React Native" name={tags["react"]} width={20} height={20} color="skyblue" />
                            <MyTechTag tag="expo" tech="Expo" name={tags["expo"]} width={20} height={20} color="white" />
                            <MyTechTag tag="atom" tech="Atom" name={tags["atom"]} width={20} height={20} color="lightgreen" />
                            <MyTechTag tag="vscode" tech="VS Code" name={tags["vscode"]} width={20} height={20} color="deepskyblue" />
                        </div>

                          <ul className="list-group">

                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>React Native Development :</strong> Skilled in building apps with Expo (managed and bare workflows), using Hooks and class components, with strong debugging experience via React Native Debugger and Chrome DevTools. </li>
                           
    
                          </ul>
                          <br/>
                          <div className="ml-5">
                              <MyTechTag tag="unity" tech="Unity 3D" name={tags["unity"]} width={20} height={20} color="skyblue" />
                              <MyTechTag tag="csharp" tech="C Sharp" name={tags["csharp"]} width={20} height={20} color="pink" />
                          </div>

                          <ul className="list-group">
                             <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>Unity3D Game Development :</strong> Experienced in developing 2D mobile games using Unity. Proficient in C# scripting, working with textures, animation, and designing user interfaces with custom GUI styles. Applied AI algorithms to create challenging brain puzzle games. </li>
                          
                          </ul>

                          <br/>

                        {/* -----------  Python & Csharp ----------- */}
                        <div>
                            <span className="text-success d-inline" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline ml-2 align-top">I develop a general purpose applications using many languages : </p>
                        </div>

                        <br/>
    
                          
                        <div className="ml-5">
                            <MyTechTag tag="python" tech="Python" name={tags["python"]} width={20} height={20} color="skyblue" />
                            <MyTechTag tag="csharp" tech="C Sharp" name={tags["csharp"]} width={20} height={20} color="pink" />

                        </div>

                        <ul className="list-group">
                             
                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>Python :</strong> Experienced with Python packages such as Scikit-learn, Matplotlib, and NumPy for Data Science, Mathematics, and Statistics. </li>

                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>Engineering :</strong>  Image processing AR/VR, AI, Machine learning using many  languages : Python, C#, C & C++...</li>

                            <li className="d-inline-block ml-3 align-top">
                            <span className="text-success d-inline-block" title="blazing">
                                <AiFillRightCircle size={18} style={{ color: "orange" }} />

                            </span> <strong>C# :</strong> Skilled in developing SOA Microsoft applications using C#, WCF, Windows Forms, and WPF.  </li>
                           
                  
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
