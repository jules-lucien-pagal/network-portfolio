import './App.css'

function App() {
  return (
    <div className="app">

      <header>
        <div className="logo"> Jules Lucien PAGAL </div>

       <nav>
  <a href="#about">About</a>
  <a href="#education">Education</a>
  <a href="#certifications">Certifications</a>
  <a href="#experience">Experience</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>

  <a
    href="/10_2026_JLP_Net_Sec.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="cv-link"
  >
    CV ↗
  </a>
</nav>
      </header>

      <main>

  {/* ==============================
      ABOUT
      ============================== */}

  <section
    id="about"
    className="section"
  >
    <p className="section-label">
      01 — ABOUT
    </p>

    <h2>
      Network & Security Engineer
    </h2>

    <p>
      I design, implement and troubleshoot enterprise network
      and security infrastructures, with a strong focus on
      Routing & Switching with Cisco & Juniper [Lan & Wan] - Network Security [Palo Alto & Fortigate]
    </p>
  </section>


  {/* ==============================
      EDUCATION & TRAINING
      ============================== */}

  <section
    id="education"
    className="section"
  >
    <p className="section-label">
      02 — EDUCATION & TRAINING
    </p>

    <h2>
      Education & Training
    </h2>

    <div className="education-grid">

      <article className="education-card">

        <p className="education-year">
          2014
        </p>

        <div>
          <p className="education-type">
            MASTER 1
          </p>

          <h3>
            École Supérieure des Ingénieurs
            de l’Afrique Centrale
          </h3>

          <p>
            ESIAC
          </p>
        </div>

      </article>


      <article className="education-card">

        <p className="education-year">
          CONTINUOUS LEARNING
        </p>

        <div>
          <p className="education-type">
            TECHNICAL TRAINING
          </p>

          <h3>
            Network & Cybersecurity
          </h3>

          <p>
            Udemy training : CCIE EI · PCNSE · LTM ·
            Cisco Nexus · Microsoft Azure · AWS
          </p>
        </div>

      </article>

    </div>

  </section>


  {/* ==============================
      CERTIFICATIONS
      ============================== */}

  <section
    id="certifications"
    className="section"
  >
    <p className="section-label">
      03 — CERTIFICATIONS
    </p>

    <h2>
      Certifications
    </h2>

    <div className="certifications-grid">

      <article className="certification-card featured-cert">

        <div className="certification-number">
          01
        </div>

        <div className="certification-content">

          <p className="certification-vendor">
            CISCO
          </p>

          <h3>
            CCNP Enterprise
          </h3>

          <p>
            Enterprise networking, advanced routing,
            switching and network infrastructure.
          </p>

          <span className="certification-status">
            PROFESSIONAL
          </span>

        </div>

      </article>


      <article className="certification-card">

        <div className="certification-number">
          02
        </div>

        <div className="certification-content">

          <p className="certification-vendor">
            JUNIPER NETWORKS
          </p>

          <h3>
            JNCIA-Junos
          </h3>

          <p>
            Junos operating system, routing fundamentals
            and Juniper networking technologies.
          </p>

          <span className="certification-status">
            ASSOCIATE
          </span>

        </div>

      </article>


      <article className="certification-card">

        <div className="certification-number">
          03
        </div>

        <div className="certification-content">

          <p className="certification-vendor">
            FORTINET
          </p>

          <h3>
            Fortinet NSE 4
          </h3>

          <p>
            Network security, FortiGate administration,
            firewall policies and security operations.
          </p>

          <span className="certification-status">
            NETWORK SECURITY
          </span>

        </div>

      </article>


      <article className="certification-card">

        <div className="certification-number">
          04
        </div>

        <div className="certification-content">

          <p className="certification-vendor">
            PEOPLECERT
          </p>

          <h3>
            ITIL 4
          </h3>

          <p>
            IT service management, service value systems
            and modern IT management practices.
          </p>

          <span className="certification-status">
            IT SERVICE MANAGEMENT
          </span>

        </div>

      </article>


      <article className="certification-card">

        <div className="certification-number">
          05
        </div>

        <div className="certification-content">

          <p className="certification-vendor">
            ISC2
          </p>

          <h3>
            Certified in Cybersecurity
          </h3>

          <p>
            Cybersecurity fundamentals, security principles,
            network security and incident response concepts.
          </p>

          <span className="certification-status">
            CYBERSECURITY
          </span>

        </div>

      </article>
      
       <article className="certification-card">

        <div className="certification-number">
          06
        </div>

        <div className="certification-content">

          <p className="certification-vendor">
            SECOPS GROUP
          </p>

          <h3>
            Certified AppSec Practitioner
          </h3>

          <p>
            Offensive Security, Application Penetration Testing
          </p>

          <span className="certification-status">
            CYBERSECURITY
          </span>

        </div>

      </article>
      
      <article className="certification-card">

        <div className="certification-number">
          07
        </div>

        <div className="certification-content">

          <p className="certification-vendor">
            SECOPS GROUP
          </p>

          <h3>
            Certified Network Security Practitioner
          </h3>

          <p>
            Offensive Security, Network Security Practitioner
          </p>

          <span className="certification-status">
            CYBERSECURITY
          </span>

        </div>

      </article>
      
       <article className="certification-card">

        <div className="certification-number">
          08
        </div>

        <div className="certification-content">

          <p className="certification-vendor">
            SECOPS GROUP
          </p>

          <h3>
            Certified Social Engineering Defense Practitioner
          </h3>

          <p>
            Offensive Security, Social Engineering Defense Practitioner
          </p>

          <span className="certification-status">
            CYBERSECURITY
          </span>

        </div>

      </article>

    </div>

  </section>


  {/* ==============================
      EXPERIENCE
      ============================== */}

  <section
    id="experience"
    className="section"
  >
    <p className="section-label">
      04 — EXPERIENCE
    </p>

    <h2>
      Professional Experience
    </h2>

    <div className="experience-timeline">

      <article className="experience-card">

        <div className="experience-date">
          APR 2026 — PRESENT
        </div>

        <div className="experience-content">

          <p className="experience-company">
            ITS GROUP · LA POSTE
          </p>

          <h3>
            Network & Security Engineer
          </h3>

          <ul>
            <li>
              MCO & MCS of MPLS L2/L3 backbone infrastructure.
            </li>

            <li>
              N2 incident management and escalation to operators
              and hosting providers.
            </li>

            <li>
              Deployment preparation, impact analysis and rollback
              planning for network equipment.
            </li>

            <li>
              Network configuration backups, restoration and change
              management.
            </li>

            <li>
              IP address management and network equipment urbanization
              using Efficient IP.
            </li>
          </ul>

        </div>

      </article>


      <article className="experience-card">

        <div className="experience-date">
          MAY 2025 — MAR 2026
        </div>

        <div className="experience-content">

          <p className="experience-company">
            TOPTECH
          </p>

          <h3>
            Network & Security Engineer
          </h3>

          <ul>
            <li>
              MCO & MCS of IT infrastructure.
            </li>

            <li>
              N2 / N3 incident support.
            </li>

            <li>
              Contribution to network design and deployment projects.
            </li>

            <li>
              Technology monitoring and technical support.
            </li>
          </ul>

        </div>

      </article>


      <article className="experience-card">

        <div className="experience-date">
          JUN 2020 — MAY 2025
        </div>

        <div className="experience-content">

          <p className="experience-company">
            PERENCO GROUP
          </p>

          <h3>
            Network & Security Engineer · Systems Administrator
          </h3>

          <ul>
            <li>
              Design and documentation of HLD / LLD network and
              security architectures.
            </li>

            <li>
              Deployment, testing and production of network and
              security infrastructures.
            </li>

            <li>
              Administration of FortiGate and Palo Alto firewalls,
              including routing, policies, VPN and clustering.
            </li>

            <li>
              LAN / WAN environments including MPLS, DMVPN, VRF,
              OSPF, BGP and VPNv4.
            </li>

            <li>
              Administration of Linux and Windows Server environments
              and automation using Bash, Python and PowerShell.
            </li>
          </ul>

        </div>

      </article>


      <article className="experience-card">

        <div className="experience-date">
          APR 2016 — JUN 2020
        </div>

        <div className="experience-content">

          <p className="experience-company">
            CIMENCAM · HOLCIM GROUP
          </p>

          <h3>
            Network & Security Engineer
          </h3>

          <ul>
            <li>
              Network and security infrastructure deployment,
              testing and documentation.
            </li>

            <li>
              N2 / N3 operational support and infrastructure
              monitoring.
            </li>

            <li>
              Administration of FortiGate, FirePower and ASA
              firewalls.
            </li>

            <li>
              Hardware upgrades and maintenance of routers,
              switches and firewalls.
            </li>

            <li>
              Security hardening through security patch management.
            </li>
          </ul>

        </div>

      </article>

    </div>

  </section>


  {/* ==============================
      SKILLS
      ============================== */}

  <section
    id="skills"
    className="section"
  >
    <p className="section-label">
      05 — SKILLS
    </p>

    <h2>
      Technical Stack
    </h2>

    <div className="skills-grid">
    
      <div>Infrastructure Design [HLD & LLD] </div>
      <div>Cisco</div>
      <div>Juniper</div>
      <div>Palo Alto</div>
      <div>Fortinet</div>

      <div>Windows & Linux</div>
      <div>Drafting Of Documents And Procedures</div>
      <div>Cyber Security Practices</div>
      <div>VMware & Hyper-V</div>
      <div>L2 & L3 Support</div>
      <div>Scripting & Clouding</div>

    </div>

  </section>


  {/* ==============================
      PROJECTS
      ============================== */}

  <section
    id="projects"
    className="section"
  >
    <p className="section-label">
      06 — PROJECTS
    </p>

    <h2>
      Enterprises Projects
    </h2>

    <div className="projects-grid">

      <article className="project-card featured-project">

        <div className="project-header">

          <div>

            <strong><p className="project-type">
            SERVER FARM DEPLOYMENT </p></strong>

            <p>
              <li> Rack mounting of physical servers </li>
              <li> Install and configure VMware ESXi Cluster - vCenter - VMware vSAN] </li>
              <li> Configure vSwitch - Trunks - DRS - HA - Install Virtuals Servers (Windows & Linux) </li>
            </p>

          </div>

          <span className="project-level">
            Deploiement From Scratch
          </span>

        </div>

        <p className="project-description">
          Implementation of an Enterprise Server Farm to provide
          local Users resources like Files , Data Base Storage , and many others services based on Virtuals and Physicals Servers
        </p>

        <div className="project-tags">
          <span>Dell - </span>
          <span>VMware - </span>
          <span>Linux - </span>
          <span>Windows </span>
          
        </div>
         <br></br>
        <div className="project-details">

          <a
            href="https:/github.com/jules-lucien-pagal"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View More Projets On Github →
          </a>

        </div>

      </article>


      <article className="project-card featured-project">

        <div className="project-header">

          <div>

            <strong><p className="project-type">
            DEPLOYMENT OF A NETWORK & SECURITY INFRASTRUCTURE - FILE SERVER MIGRATION </p></strong>

            <p>
              <li> High-Level Design (HLD) & Low-Level Design (LLD) [Architecture Document, IP Segmentation, Testing in
              a Laboratory Environment] </li>
              <li> Rack installation and deployment of the Cisco L3-L2 Switch StackWise </li>
              <li> Configuration of the ASR 1000 router for L3 MPLS connectivity </li>
              <li> Configuration of the Fortinet firewall cluster and opening of traffic flows </li>
              <li> Connectivity Testing - Production Deployment - Documentation </li>
              <li> Implementation of an IPSec VPN (S2S) and SSL Remote Access via Global Protect </li>
              <li> Rack installation and IP configuration of the file server to be migrated </li>
              <li> Copying and synchronizing files with Robocopy (preserving ACLs) - Mapping network drives - Testing connectivity </li>
              
            </p>

          </div>

          <span className="project-level">
            Deploiement From Scratch
          </span>

        </div>

        <p className="project-description">
          Implementation of an Enterprise Networking & Security.
          Provide MPLS l3-VPN Connectivity to connect clients sites accross a Backbone MPLS
          Ensure that local Users can access to resources hosted in Servers , like Files , Data Base Storage , and many others services based on Virtuals and Physicals Servers
        </p>

        <div className="project-tags">
          <span>Dell - </span>
          <span>Windows - </span>
          <span>Cisco Routers & Switchs - </span>
          <span>[BGP|MP-BGP|VRFs|PBR|L3_MPLS-VPN] </span>
          <span> </span>
          
        </div>
         <br></br>
        <div className="project-details">

          <a
            href="https:/github.com/jules-lucien-pagal"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View More Projets On Github →
          </a>

        </div>

      </article>

 <article className="project-card featured-project">

        <div className="project-header">

          <div>

            <strong><p className="project-type">
            CISCO MERAKI SD-WAN MIGRATION & NETWORK SEGMENTATION </p></strong>

            <p>
              <li> Configuration of the L3 core switch and Cisco FirePower firewall </li>
              <li> Rack installation and deployment of the Cisco L3-L2 Switch StackWise </li>
              <li> Network Support for Network Engineers Enterprise Group </li>
              <li> Deployment of the firewall and L3 switch </li>
              <li> Connectivity Testing - Production Deployment - Documentation </li>
              <li> Oversight of the installation of a secondary fiber link for redundancy </li>
              
            </p>

          </div>

          <span className="project-level">
            Network Support
          </span>

        </div>

        <p className="project-description">
          Configuration Deployment
          Network Support for Meraki SDWAN Migration
        </p>

        <div className="project-tags">
          <span>Meraki SDWAN - </span>
          <span>L3 Switchs - </span>
          <span>Fiber Optic </span>
          <span> </span>
          
        </div>
         <br></br>
        <div className="project-details">

          <a
            href="https:/github.com/jules-lucien-pagal"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View More Projets On Github →
          </a>

        </div>

      </article>


      <article className="project-card featured-project">

        <div className="project-header">

          <div>

            <strong><p className="project-type">
            DEPLOYMENT OF AN IT INFRASTRUCTURE FOR A REMOTE SITE </p></strong>

            <p>
              <li> Equipment Configuration: Cisco Router & Switch – FortiGate Firewall – VMware/VSAN Cluster and Server Deployment [Windows & Linux] </li>
              <li> Deployment – Documentation – Infrastructure Urbanization </li>
              
            </p>

          </div>

          <span className="project-level">
            Network Support
          </span>

        </div>

        <p className="project-description">
          From Scratch Deployment
          Implementation & Documentation
        </p>

        <div className="project-tags">
          <span>Cisco - </span>
          <span>VMware - </span>
          <span>Fortinet </span>
          <span> </span>
          
        </div>
         <br></br>
        <div className="project-details">

          <a
            href="https:/github.com/jules-lucien-pagal"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View More Projets On Github →
          </a>

        </div>

      </article>

    </div>

  </section>


  {/* ==============================
      CONTACT
      ============================== */}

  <section
    id="contact"
    className="section contact"
  >
    <p className="section-label">
      07 — CONTACT
    </p>

    <h2>
      Let's connect.
    </h2>

    <p>
      Interested in networking, cybersecurity or infrastructure?
      Feel free to connect with me.
    </p>

    <div className="hero-buttons">

      <a
        href="mailto:juleslucienpagal@gmail.com"
        className="button primary"
      >
        Email Me
      </a>
      
      
      <a
        href="https://www.linkedin.com/in/pagal-jules-lucien-7aa198106/"
        target="_blank"
        rel="noreferrer"
        className="button primary"
      >
        LinkedIn
      </a>
     <a
        href="https://github.com/jules-lucien-pagal"
        target="_blank"
        rel="noreferrer"
        className="button primary"
      >
        My Labs On Github
      </a>
       <a
        
        target="_blank"
        rel="noreferrer"
        className="button primary"
      >
        Call Me At : (+33)758797804
      </a>
    </div>

  </section>

</main>
      <footer>
        <p>© 2026 — Network & Cybersecurity Engineer</p>
      </footer>
    </div>
  )
}

export default App
