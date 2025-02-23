"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ContentSection from "@/components/ContentSection"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ContentSection
        imageUrl="/brown.jpg"
        title="Galvanize, Ghana’s premier talent management agency is committed to empowering African influencers, content creators, and gifted individuals to hone their craft and build careers from what they love."
        buttonLink="/"
        buttonText="Who We Are"
        index={0}
        imageLeft={false}
      />
      <ContentSection
        imageUrl="/african.jpg"
        title="We have the ‘it’ factor! Whatever it takes to make you stand out and get the recognition you deserve, we’re here to turn your unique talent into something extraordinary"
        buttonLink="/"
        buttonText="Find Out More"
        index={1}
        imageLeft={true}
      />
      <ContentSection
        imageUrl="/podcaster.jpg"
        title="Whether you’re an amateur or a pro, we’ll help you find your voice and amplify it to the world—be as loud as you want"
        buttonLink="/link3"
        buttonText="What We Do"
        index={2}
        imageLeft={false}
      />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}
