import React, { useState } from "react";
import Rexan from "./assets/rexanwong.png";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";
import img5 from "./assets/img5.webp";
import vid from "./assets/vid.mp4";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import olympiad from "./assets/vid2_files/olympiad.png";
import iee from "./assets/vid2_files/ieee.png";
import labs from "./assets/vid2_files/24labs.jpg";
import apple from "./assets/vid2_files/apple.png";
import arta from "./assets/vid2_files/arta.png";
import cais from "./assets/vid2_files/cais.png";
import cityU from "./assets/vid2_files/cityuniversity.png";
import cosensy from "./assets/vid2_files/cosensys.jpg";
import cryptoblk from "./assets/vid2_files/cryptoblk.png";
import devdao from "./assets/vid2_files/developerdao.png";
import ethglobal from "./assets/vid2_files/ethglobal.jpg";
import hkis from "./assets/vid2_files/hkis.jpg";
import web from "./assets/vid2_files/thirdweb.png";

const App = () => {
  const [openSoftware, setOpenSoftware] = useState(null);
  const [openAwards, setOpenAwards] = useState(null);
  const [openWorks, setOpenWorks] = useState(null);
  const [openEducation, setOpenEducation] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleSoftware = (i) => setOpenSoftware(openSoftware === i ? null : i);

  const toggleAwards = (i) => setOpenAwards(openAwards === i ? null : i);

  const toggleWorks = (i) => setOpenWorks(openWorks === i ? null : i);

  const toggleEducation = (i) =>
    setOpenEducation(openEducation === i ? null : i);

  return (
    <>
      <main className="main">
        <div className="profile">
          <div className="profile-header">
            <div className="prof-txt">
              <h1 className="font-bold">Rexan Wong</h1>
              <p>
                <GiWorld className="gi" />
                <a
                  href="https://www.google.com/maps/place/HongKong"
                  target="_blank"
                >
                  San Fransisco, CA
                </a>
              </p>
            </div>
            <div className="prof-img">
              <img src={Rexan} alt="" />
            </div>
          </div>
          <div className="prof-desc">
            <p className="b">
              <b>
                I'm an 18 y/o entrepreneur, developer, & influencer from Hong
                Kong
              </b>
            </p>
            <p>- I build and grow software companies (500K+ users)</p>
            <p>- 20K followers on X/Twitter </p>
            <p>- 5x international hackathon winner</p>
          </div>
          <div className="prof-links">
            <a href="https://twitter.com/rexan_wong" target="_blank">
              <div className="link">
                <FaXTwitter className="ico ico-x" />
                <p>@rexan_wong</p>
              </div>
            </a>{" "}
            <a href="https://instagram.com/rexanwonger" target="_blank">
              <div className="link">
                <FaInstagram className="ico ico-red" />
                <p>@rexanwonger</p>
              </div>
            </a>
            <a href="https://www.youtube.com/@rexanwong/videos" target="_blank">
              <div className="link">
                <FaYoutube className="ico ico-red" />
                <p>rexanwong</p>
              </div>
            </a>{" "}
            <a href="https://github.com/RexanWONG" target="_blank">
              <div className="link">
                <FaGithub className="ico ico-git" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/rexanwong/" target="_blank">
              <div className="link">
                <FaLinkedin className="ico ico-blu" />
              </div>
            </a>
            <a
              href="https://open.spotify.com/user/31hozdufj77j63zwfoekvhfckz7i?si=9c16240e84f64148"
              target="_blank"
            >
              <div className="link">
                <FaFacebook className="ico ico-blu" />
              </div>
            </a>
            <a
              href="https://lapis-balaur-465.notion.site/How-I-use-X-to-grow-my-apps-to-300K-users-the-build-in-public-playbook-by-Rexan-Wong-1b077afe2be980b785bfd37a544c884d?pvs=74"
              target="_blank"
            >
              <div className="link">
                <div className="ico ico-bk">📙</div>
              </div>
            </a>
          </div>
        </div>
        <div className="softwares">
          <h1>Software</h1>

          {[
            {
              img: img5,
              year: "2025",
              name: "brandthetics.com",
              url: "https://brandthetics.com/",
              desc: (
                <>
                  Creating high quality cinematic short form content for short
                  form platforms is tedious and requires a lot of creativity.
                  Brandthetics is an app that <br /> allows you to easily create
                  high quality cinematic short form content for your business or
                  brand. Inspired by @bymaximise style videos.
                </>
              ),
            },
            {
              img: img4,
              year: "2025",
              name: "make.ad",
              url: "https://make.ad/",
              desc: (
                <>
                  Creating ads for any business is expensive, time-consuming,
                  and requires a lot of creativity. So I built make.ad with
                  24Labs, an AI app that <br /> creates ads for you. Upload a
                  photo of your product and the app creates a stunning ad for
                  you. Within a month of launching we've hit <br /> close to 5K
                  users and $5K MRR, through growing and attacking multiple
                  distribution channels.
                </>
              ),
            },
            {
              img: img3,
              year: "2025",
              name: "bulletpen.ai",
              url: "https://bulletpen.ai/",
              desc: (
                <>
                  Writing is hard, and turning your ideas and thoughts into
                  polished content is even harder. Most writing tools are either
                  too basic or too complex, <br /> and none of them help you
                  actually improve your writing in real-time. So I built
                  Bulletpen, an AI app that transforms your spoken <br />{" "}
                  thoughts into well-structured, polished writing in real time.
                  Since launching, it's grown to 2K active users and reached $1K
                  MRR.
                </>
              ),
            },
            {
              img: img2,
              year: "2024",
              name: "textbehindimage.app",
              url: "https://textbehindimage.app/",
              desc: (
                <>
                  Creating stunning text-behind-image designs are difficult and
                  there's not many easy-to-use tools online that helps you do
                  that. So I built my own <br /> free tool, in 3 hours with AI
                  tools such as cursor.sh, that helps you create these stunning
                  text-behind-image designs easily on your <br /> images. Since
                  launching, the tool has got 300K users, 3 million views on
                  X/Twitter, #1 Product of the Day on Product Hunt, and <br />{" "}
                  notable shoutouts from people like Ryan Hoover.
                </>
              ),
            },
            {
              img: img1,
              year: "2024",
              name: "videofast.gg",
              url: "https://videofast.gg/",
              desc: (
                <>
                  I've started building VideoFast since the beginning of 2024,
                  while working on schoolwork at the same time. From iterating
                  and constantly <br /> improving the design and the usability
                  of the video editor, it has evolved into the easiest video
                  editor that you will ever use. Currently, <br /> VideoFast has
                  got the #2 Product of the Day on Product Hunt and has over 500
                  regular users using the editor.
                </>
              ),
            },
          ].map((item, index) => (
            <div className="software" key={index}>
              <div
                onMouseOver={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="brand"
                style={{ cursor: "pointer" }}
              >
                <a target="_blank" href={item.url}>
                  <div className="div items-center justify-center">
                    <img src={item.img} width={34} alt="" />
                    <p>{item.name}</p>
                  </div>
                </a>
                <div className="brandicons">
                  {hoveredIndex === index && (
                    <a target="_blank" href={item.url}>
                      <MdOutlineOpenInNew className="iconn" />
                    </a>
                  )}
                  <p>{item.year}</p>
                  <SlArrowDown
                    className={`arrow ${
                      openSoftware === index ? "rotate-up" : ""
                    }`}
                    onClick={() => toggleSoftware(index)}
                  />
                </div>
              </div>

              {openSoftware === index && (
                <div className="brand-desc">
                  <p>{item.desc}</p>
                  <video src={vid} controls></video>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="softwares">
          <h1>Awards</h1>

          {[
            {
              img: olympiad,
              year: "2024",
              name: "Hong Kong Blockchain Olympiad",
              desc: (
                <>
                  The HKBCOL is a blockchain solution design competition where
                  teams from all secondary schools from Hong Kong compete to
                  pitch and present their blockchain solution to industry
                  leading judges. I was awarded the gold medal (first place) for
                  my project Proof of Workout Protocol and selected to represent
                  Hong Kong at the International Blockchain Olympiad in the
                  Netherlands.
                </>
              ),
            },
            {
              img: ethglobal,
              year: "2023",
              name: "ethglobal online",
              desc: (
                <>
                  ETHOnline is a three week long online hackathon with over
                  $200,000 USD in prizes as well as a series of curated summits,
                  celebrating some of the most significant happenings &
                  learnings from the past 12 months in web3. The hackathon is
                  focused on building Ethereum based applications with different
                  bounties' tools and technologies. I built Koinu, an npm
                  library that allows developers to include a cross chain
                  experience within their dapps. This project was selected as a
                  finalist project, along with 9 other finalist projects, out of
                  500 projects. Being the only under-18 to win the competition,
                  and competiting against the best and most hardcore developers
                  in the Web3 space, out of 515 projects, I learnt a lot more
                  about Web3 and blockchain development during the course of the
                  hackathon and it encouraged me to build blockchain
                  applications more : the fact that I could compete, as a 15
                  year old, at the time, against the top developers of the Web3
                  space, and win, I am looking forward to build more
                  applications for everyday users of Web3
                </>
              ),
            },
            {
              img: cosensy,
              year: "2023",
              name: "not another virtual hackathon (navh) by cosensys",
              desc: (
                <>
                  Consensys, one of the biggest blockchain companies, hosted
                  NAVH: Not Another Virtual Hackathon beginning July 6th, 2023,
                  for technical and non-technical builders to bring their skills
                  to the table. Builders from anywhere in the world can join to
                  compete for over $115,500 in bounties, using Cosensys products
                  to build something. I built Proof of Workout Protocol : a dApp
                  on Linea (a blockchain developed by leading blockchain company
                  Cosensys) designed to motivate and reward physical fitness
                  through a gamified system of quests and token-based incentive.
                </>
              ),
            },
            {
              img: devdao,
              year: "2023",
              name: "developer dao & mina protocol hackathon",
              desc: (
                <>
                  Developer DAO, the biggest Web3 Developer Organisation, and
                  Mina Protocol, a zero knowledge based blockchain with a market
                  cap of $800 million USD, ran a week-long, remote hackathon
                  with ~ $10,000 in prizes to be won in USDC, Mina Token and
                  CODE. The hackathon is focused on building zero-knowledge
                  applications on Mina Protocol with SnarkyJS. I built a
                  privacy-focused decentralized zkApp that aims to enable
                  anonymous and secure protests where participants can join and
                  support various causes while preserving their privacy. This
                  hackathon was the most hardcore hackathon I've participated in
                  : joining the hackathon, knowing very little about
                  zero-knowledge (zk) technology, let alone building zk
                  technology. Throughout the process, I had to dive deep and
                  learn all these new concepts while building my zkApp. In the
                  end, my project won first place in the hackathon, out of 40
                  other projects, and this victory provoked me to go further
                  deeper into this tough concept of zero knowledge technology.
                </>
              ),
            },
            {
              img: ethglobal,
              year: "2023",
              name: "ethglobal waterloo",
              desc: (
                <>
                  ETHGlobal Waterloo is a 24hr long In person hackathon at
                  Waterloo, CA, with over $200,000 USD in prizes as well as a
                  series of curated summits, celebrating some of the most
                  significant happenings & learnings from the past 12 months in
                  web3. The hackathon is focused on building Ethereum based
                  applications with different bounties' tools and technologies.
                  The entire hackathon was an amazing learning process to me,
                  especially for learning more about blockchain development -
                  throughout the entire hackathon, I had many chances to talk
                  face to face with top leaders and developers in the Web3 space
                  - all these people, all the other teams, together in one big
                  room in the town of Waterloo, building and sharing a passion
                  together. An even bigger impact personally was being able to
                  travel all the way from where I live, Hong Kong, all the way
                  to Waterloo, Ontario, Canada, and hack along with two
                  University of Waterloo students, herby gaining exposure to
                  university life and working as a development team. We built a
                  Video-sharing platform powered by ERC-6551
                  tokenbound-accounts, empowering the content creator economy
                  through advertisers' staking in smart contracts.
                </>
              ),
            },
            {
              img: apple,
              year: "2023",
              name: "apple swift student challenge",
              desc: (
                <>
                  The Swift Student Challenge at WWDC (Worldwide Developers
                  Conference) is an annual competition organized by Apple to
                  celebrate the ingenuity and expertise of student developers
                  using Swift. Apple picks around 300 applications out of a pool
                  of more than 10,000+ applicants to win, and I was one of the
                  300 applicants to win the challenge. I built an iOS app/game
                  that challenges users to find an image of a random word
                  generated by the app in their photo album, then used machine
                  learning models to verify that the image being selected
                  matches the random word.
                </>
              ),
            },
          ].map((item, index) => (
            <div className="software" key={index}>
              <div
                className="brand"
                onClick={() => toggleAwards(index)}
                style={{ cursor: "pointer" }}
              >
                <div className="div items-center justify-center">
                  <img src={item.img} width={34} alt="" />
                  <p>{item.name}</p>
                </div>
                <div className="brandicons">
                  <p>{item.year}</p>
                  <SlArrowDown
                    className={`arrow ${
                      openAwards === index ? "rotate-up" : ""
                    }`}
                    onClick={() => toggleSoftware(index)}
                  />
                </div>
              </div>

              {openAwards === index && (
                <div className="brand-desc">
                  <p>{item.desc}</p>
                  <video src={vid} controls></video>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="softwares">
          <h1>Works</h1>

          {[
            {
              img: labs,
              year: "2025",
              name: "portfolio founder @ 24labs",
              desc: (
                <>
                  Building and growing apps at 24Labs. Currently building
                  make.ad
                </>
              ),
            },
            {
              img: web,
              year: "2023",
              name: "ambassdor @ thirdweb",
              desc: (
                <>
                  A Thirdweb Ambassador is someone that Thirdweb, the leading
                  blockchain infrastrcure company, has selected to be
                  ambassadors for Thirdweb. As a Thirdweb ambassador, I share
                  knowledge on new groundbreaking web3 tools, represent Thirdweb
                  in networking events, create content for Thirdweb, and get
                  rewarded with benefits exclusive to ambassadors
                </>
              ),
            },
            {
              img: cityU,
              year: "2023",
              name: "Lecturer @ City University of Hong Kong's Gifted Education Programme on Cryptography, Blockchain, and Fintech",
              desc: (
                <>
                  The Coding, Cryptography and FinTech (CCF) Skills Education
                  for Gifted Students programm is a programm aimed for the most
                  gifted high school students around Hong Kong, teaching them
                  about coding, cryptography, and fintech. As a speaker and a
                  mentor, I hosted workshops and lectures for the program to
                  teach the students about these topics
                </>
              ),
            },
            {
              img: iee,
              year: "2022",
              name: "Technical member @ IEEE HK Blockchain Local GroupTechnical member @ IEEE HK Blockchain Local Group",
              desc: (
                <>
                  The IEEE Hong Kong Blockchain Local Group is the official
                  blockchain group for Hong Kong under the Institute of
                  Electrical and Electronics Engineers (IEEE)'s Hong Kong
                  Section. The IEEE HK Blockchain Local Group hosted a Web3
                  hackathon, targeted towards university students, to build Web3
                  applications and compete for prizes up to $100K HKD. Over 100
                  teams joined, from 5 different universities across Hong Kong.
                  As a mentor, I was in charge of giving guidances and tips to
                  the teams participating about the hackathon, as well as host
                  mini workshops and create technical Youtube tutorials about
                  blockchain development. In addition, as a volunteer, I was in
                  charge of setting up the venue and more, ensuring that the
                  hackathon day in person was a smooth experience, as well as
                  build the website for the hackathon
                </>
              ),
            },
            {
              img: arta,
              year: "2022",
              name: "intern @ arta tech fin",
              desc: (
                <>
                  During the summer of 2022, I interned at Arta Tech Fin as a
                  blockchain research intern. My responsibilities included
                  conducting research on blockchain technologies and their
                  potential applications in the financial industry. At Arta Tech
                  Fin, I had the chance to work with experienced professionals
                  in the financial industry and learn about the latest trends
                  and developments in blockchain technology. I gained valuable
                  insights into how blockchain can be used to solve problems and
                  improve processes in the financial sector, and was able to
                  contribute to the company's research efforts.
                </>
              ),
            },
            {
              img: cryptoblk,
              year: "2022",
              name: "intern @ crytoblk",
              desc: (
                <>
                  At Cryptoblk, I had the opportunity to work with a talented
                  team of developers and learn about the latest technologies and
                  trends in the blockchain industry. I gained valuable
                  experience in smart contract development and blockchain
                  application development, and was able to contribute to a
                  variety of projects that helped to improve the company's
                  products and services. I also worked with the business
                  development team and IEEE HK Blockchain to host the Web3 Dev
                  Hackathon 2022
                </>
              ),
            },
          ].map((item, index) => (
            <div className="software" key={index}>
              <div
                className="brand"
                onClick={() => toggleWorks(index)}
                style={{ cursor: "pointer" }}
              >
                <div className="div divv items-center justify-center">
                  <img src={item.img} width={34} alt="" />
                  <p>{item.name}</p>
                </div>
                <div className="brandicons">
                  <p>{item.year}</p>
                  <SlArrowDown
                    className={`arrow ${
                      openWorks === index ? "rotate-up" : ""
                    }`}
                    onClick={() => toggleSoftware(index)}
                  />
                </div>
              </div>

              {openWorks === index && (
                <div className="brand-desc">
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="softwares">
          <h1>Education</h1>

          {[
            {
              img: hkis,
              year: "2020 - 2025",
              name: "High School @ Hong Kong International School",
            },
            {
              img: cais,
              year: "2013 - 2020",
              name: "Primary school @ Christian Alliance International School",
            },
          ].map((item, index) => (
            <div className="software" key={index}>
              <div
                className="brand"
                onClick={() => toggleEducation(index)}
                style={{ cursor: "pointer" }}
              >
                <div className="div divv items-center justify-center">
                  <img src={item.img} width={34} alt="" />
                  <p>{item.name}</p>
                </div>
                <div className="brandicons">
                  <p>{item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
