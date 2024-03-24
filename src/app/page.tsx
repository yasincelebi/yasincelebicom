import {Github, Linkedin} from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-4 flex-1 container items-center gap-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold">
                Yasin Çelebi
            </h1>
            <p className="text-lg text-center">
                Frontend Developer
            </p>
            <div className="flex flex-col space-y-4 text-xs">
                <p className='text-base'>
                    Hi, I&apos;m Yasin,  software developer with experience in developing front-end and back-end systems.
                </p>
                <p>
                    Outstanding individual contributor and a fantastic team player; illustrates the true meaning of
                    teamwork, and creates good, long-lasting relationships with others along the way.
                </p>
                <p>
                    Strategic thinker/nonconformist; striving to make the best of each and every situation.
                </p>
                <p>
                    Self-starter/Internally motivated who draws energy from unknowns.
                </p>
                <p>
                    Capable of working very independently with excellent quality and having a natural desire to develop
                    new skills constantly.
                </p>

            </div>

            <section id='experience' className="flex flex-col space-y-4 w-full">
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h3 className="text-lg font-medium">Frontend Developer</h3>
                        <div className="text-sm my-2">
                            Developing ReviewSolicitors, a platform offering client feedback for UK law firms.
                        </div>
                        <p className="text-sm">2023 - Present</p>
                        <p className="text-sm">ReviewSolicitors</p>
                        <p className="text-sm">Nottingham, UK</p>

                        <div className="flex space-x-2 text-xs mt-1">
                            <span>React</span>
                            <span>Java/Spring Boot</span>
                            <span>Typescript</span>
                            <span>PostgreSQL</span>
                        </div>

                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Senior Frontend Developer</h3>
                        <p className="text-sm my-2">
                            Worked as a senior frontend developer in a scrum team specializing in developing fast
                            payment methods in restaurants via QR code as well as order-tracking systems. Led the
                            payments team.
                        </p>
                        <p className="text-sm">2022 - 2023</p>
                        <p className="text-sm">Qlub</p>
                        <p className="text-sm">Istanbul, Turkey</p>

                        <div>
                            <div className="flex space-x-2 text-xs mt-1">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Typescript</span>
                                <span>Web Components</span>
                                <span>CLI Apps/Bash</span>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Frontend Developer</h3>
                        <p className="text-sm my-2">
                            Frontend development of education platform that used by thirty million unique users.
                        </p>
                        <p className="text-sm">2021 - 2022</p>
                        <p className="text-sm">Sebit</p>
                        <p className="text-sm">Ankara, Turkey</p>
                        <div>
                            <div className="flex space-x-2 text-xs mt-1">
                                <span>React</span>
                                <span>Angular/AngularJS</span>
                                <span>Typescript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex space-x-4">
                <a target="_blank" href="https://www.github.com/yasincelebi" className="text-lg font-medium" rel="noopener noreferrer">
                    <Github size={24}/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/celebiyasinn" className="text-lg font-medium" rel="noopener noreferrer">
                    <Linkedin size={24}/>
                </a>
            </div>
        </main>
    );
}
