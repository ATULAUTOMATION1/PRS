"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';

export default function AboutCharter() {
  return (
    <section id="introduction" style={{ padding: '80px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        
        {/* Intro */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '30px' }}>Introduction</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '50px' }}>
            PRS INFRABUILD LIMITED LIABILITY PARTNERSHIP is a professional construction and engineering 
            company specializing in the design, construction, erection, and installation of prefabricated and pre-
            engineered building solutions. We deliver efficient, high-quality, and cost-effective structures 
            tailored to the specific needs of industrial, commercial, and infrastructure projects. With a strong 
            focus on safety, precision, and timely execution, we combine modern construction technologies with 
            experienced project management to deliver reliable building solutions across diverse sectors.
          </p>
        </motion.div>

        {/* We Specialize In */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 className="script-heading" style={{ fontSize: '3.5rem', margin: 0 }}>We Specialize</h3>
            <h3 className="script-heading" style={{ fontSize: '3.5rem', marginTop: '-20px' }}>in</h3>
          </div>
          
          <div style={{ flex: '2', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[
              "Installation of Structural and PEB",
              "Industrial Painting",
              "Construction & Maintenance of Railway Lines",
              "Civil Engineering & Constructions"
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#FFD700', fontSize: '1.5rem', fontWeight: '700' }}>
                <CheckSquare size={30} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mid Text */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '30px' }}>
            We provide high quality solutions with cost-effectively. We provide Civil construction & maintenance, 
            Industrial Automation solutions to any type of industry and Office, Industrial Painting, Construction of 
            Railway Track and Maintenance.
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '30px' }}>
            We are a company driven by challenges. We have provided 100% satisfaction with our solution 
            throughout the life cycle of the product. We keenly listen to the customer requirement, we understand 
            the need micro-and then we systematically build and integrate automation solutions. Innovation, cost 
            effectiveness, practicality are the principles that drive us. Our focus is always on providing the best 
            design and engineering solutions.
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '60px' }}>
            Our employees are provided with a culture that helps them think independently and the 
            rewards program inspires our engineers and technical solutions team to perform consistently.
          </p>
        </motion.div>

        {/* Mission & Values */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div>
            <h3 className="script-heading">Our Mission</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
              To stay committed for being innovative, competitive and highly satisfaction of our clients. To 
              provide an environment that promotes personal growth and self-pride of our entire team.
            </p>
          </div>

          <div>
            <h3 className="script-heading">Our Values</h3>
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '10px' }}>We are responsible for quality:</h4>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                We strive to do and deliver a good output, we assure you of complete value for your money spent 
                on work assigned to us. Every member of our team is responsible for quality of what he/she is assigned to do.
              </p>
            </div>
            
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '10px' }}>We deliver complete client satisfaction:</h4>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                Our teams are completely dedicated to Client Satisfaction as core of their work profile. We believe 
                in understanding client requests and delivering output meeting their expectations.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '10px' }}>We value our people:</h4>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                Employees are at the heart of our action, with a talented pool of people coming together with a dream of shaping our own future and of everyone else working with us. We respect each one's place and existence in the value chain and take pride in significant contributions from diverse people.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '10px' }}>We act with integrity:</h4>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                We are committed to act with honesty and integrity of all our actions. We value time and commitments and believe in efficient and open communications in all matters.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision, Behavior, Pledge */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div>
            <h3 className="script-heading">Our Vision</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, fontStyle: 'italic' }}>
              To be "the Enterprise of the future". To be viewed as a most reliable, respected and profitable business house in our core competence of Automation services. Our customer, employee, partner and shareholder will be proud to be associated with us.
            </p>
          </div>

          <div>
            <h3 className="script-heading">Our Behavior</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, fontStyle: 'italic' }}>
              We behave in a manner, which ensures that we care for our values and act in accordance. We are committed towards our Company Values and thus our focus is operational excellence, speed and quality output. We believe in communicating openly at all times both with clients and internally with employees.
            </p>
          </div>

          <div>
            <h3 className="script-heading">We Pledge</h3>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#FFD700', fontWeight: '600', marginBottom: '20px' }}>
              We know it well that client satisfaction is fundamentally attached to project outcomes and it is our intent to provide exceptional client service and technically accurate, high quality work to our clients. In this spirit, we make our declaration:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '30px', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li>We will establish strong partnership with our clients by anticipating their needs and working together with them to determine the best project solutions.</li>
              <li>Provide effective timely and responsive communication to clients and all project members.</li>
              <li>Will ensure that all project partners understand the requirements set forth in the project.</li>
              <li>Will pursue continues improvement through client feedback and collaboration.</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
