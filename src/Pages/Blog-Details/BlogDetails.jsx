// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Accordion } from 'react-bootstrap';
// import "./BlogDetails.css";
// import BlogDetails1 from "../../assets/Images/Blogs/BlogDetails.png";
// import Date2 from "../../assets/Images/Date2.png";

// const BlogDetails = () => {

//     const { blogName } = useParams();

//     const ConvertLowerCase = (name) => {
//         return name.toLowerCase().replace(/\s+/g, '-');
//     }

//     const renderBlogContent = (blogName) => {
//         switch (blogName) {
//             case ConvertLowerCase("Wolf Moon January 2025"):
//                 return (
//                     <>
//                         <h1>Wolf Moon January 2025: Astrology Predictions, Spiritual Meaning & Rituals</h1>

//                         <div className='date d-flex align-items-center'>
//                             <img src={Date2} alt="" className='date-img' />
//                             <span className='ms-2 ms-sm-2 ms-xl-3'>11 Feb, 2025</span>
//                         </div>

//                         <p className='mb-3 mb-xl-3 mb-xxl-4'>
//                             The January 2025 Wolf Moon is a celestial event that has captivated stargazers, astrologers, and spiritual seekers for centuries. As the first full moon of 2025, it carries profound symbolism, marking a time of introspection, renewal, and spiritual awakening. But what does the Wolf Moon mean in astrology? How can you harness its energy to align with your goals and intentions? Let’s dive deep into the mystical significance of the January 2025 Wolf Moon and explore how it influences the zodiac signs.
//                         </p>

//                         <h5 >What is the January 2025 Wolf Moon?</h5>
//                         <p>
//                             The Wolf Moon gets its name from Native American and European traditions, where wolves were often heard howling at the midwinter moon. This full moon typically occurs in January, setting the tone for the year ahead with its powerful energy of transformation and inner strength.
//                         </p>

//                         <h5 >Astrological Significance of the Wolf Moon</h5>
//                         <p>
//                             Astrologically, the Wolf Moon is usually in the sign of Cancer or Leo, depending on the year. Cancer is ruled by the Moon itself, making this lunation highly emotional, intuitive, and deeply connected to our inner world. If the full moon falls in Leo, it takes on a more dynamic and expressive energy, urging us to step into our power with confidence.
//                         </p>


//                         <h5>Themes and Energies of the Wolf Moon</h5>
//                         <ol>
//                             <li>
//                                 <p className='mb-0'>Inner Reflection – This is a time to look inward, reassess goals, and reconnect with personal truths.</p>
//                             </li>
//                             <li>
//                                 <p className='mb-0'>Emotional Release – Full moons signify endings and culminations, making this the perfect time to let go of old patterns and embrace change.</p>
//                             </li>
//                             <li>
//                                 <p className='mb-0'>Spiritual Awakening – As wolves symbolize intuition and wisdom, this moon encourages deep spiritual insights and transformation.</p>
//                             </li>
//                             <li>
//                                 <p className='mb-0'>Strength and Resilience – Just as wolves endure the harsh winter, this moon reminds us of our inner strength and adaptability.</p>
//                             </li>
//                         </ol>


//                         <h5>How the January 2025 Wolf Moon Affects Each Zodiac Sign</h5>
//                         <p>Every zodiac sign feels the energy of the Wolf Moon differently. Here’s how it impacts your sign and what you can do to harness its power:</p>

//                         <h6>Aries (March 21 - April 19)</h6>
//                         <p>Expect heightened emotions in your home and family life. Use this time to mend relationships and create emotional balance. A home cleanse or decluttering session will help clear stagnant energy.</p>

//                         <h6>Taurus (April 20 - May 20)</h6>
//                         <p>Your communication sector is lit up under this moon. Pay attention to how you express yourself—whether in personal conversations or online. Journaling or writing your intentions will bring clarity.</p>

//                         <h6>Gemini (May 21 - June 20)</h6>
//                         <p>Money matters may come to the forefront. This is a great time to set financial goals for the year. Avoid impulsive spending and focus on creating stability in your income streams.</p>

//                         <h6>Cancer (June 21 - July 22)</h6>
//                         <p>As this full moon likely occurs in your sign, expect deep emotional revelations. Prioritize self-care, meditate, and embrace your intuition to navigate this intense energy.</p>

//                         <h6>Leo (July 23 - August 22)</h6>
//                         <p>For Leos, this moon illuminates hidden thoughts and subconscious patterns. Shadow-work, dream journaling, and meditation will help you uncover personal truths.</p>

//                         <h6>Virgo (August 23 - September 22)</h6>
//                         <p>Your social circle and friendships may be under the spotlight. Reevaluate connections that no longer serve you and nurture relationships that align with your growth.</p>

//                         <h6>Libra (September 23 - October 22)</h6>
//                         <p>Career and public image take center stage. Use this time to reflect on your professional path and set long-term goals. Recognition for past efforts could come your way.</p>

//                         <h6>Scorpio (October 23 - November 21)</h6>
//                         <p>This is a spiritually charged time for Scorpios. You may feel drawn to esoteric studies, travel, or expanding your knowledge in some way. Trust your intuition and embrace new perspectives.</p>

//                         <h6>Sagittarius (November 22 - December 21)</h6>
//                         <p>Deep emotional or financial matters may come to light. Pay attention to debts, investments, or shared resources. Let go of any emotional baggage that holds you back.</p>

//                         <h6>Capricorn (December 22 - January 19)</h6>
//                         <p>This moon highlights relationships and partnerships. If any imbalances exist, they will surface. Open and honest communication is key to strengthening bonds.</p>

//                         <h6>Aquarius (January 20 - February 18)</h6>
//                         <p>Your focus shifts to health, wellness, and daily routines. Implement positive habits and eliminate anything that drains your energy.</p>

//                         <h6>Pisces (February 19 - March 20)</h6>
//                         <p>Romance, creativity, and self-expression flourish under this moon. Indulge in artistic pursuits, explore new hobbies, or nurture your inner child.</p>


//                         <h5>Rituals and Practices to Harness the January 2025 Wolf Moon’s Power</h5>
//                         <p className='mt-2'>To make the most of this lunar energy, consider engaging in some powerful full moon rituals:</p>

//                         <h6>1. Full Moon Meditation</h6>
//                         <p>Sit in a quiet space, light a candle, and focus on your breath. Visualize the moon’s light cleansing and recharging your energy.</p>

//                         <h6>2. Journaling and Intention Setting</h6>
//                         <p>Write down your thoughts, emotions, and goals. Reflect on what you wish to release and what you want to attract into your life.</p>

//                         <h6>3. Moon Water Charging</h6>
//                         <p>Fill a jar with water and place it under the moonlight overnight. Use this charged water for cleansing, drinking, or watering plants to infuse them with lunar energy.</p>

//                         <h6>4. Crystal Healing</h6>
//                         <p>Work with moonstone, selenite, or clear quartz to amplify your intuition and spiritual awareness. Hold the crystal while meditating or place it under your pillow.</p>

//                         <h6>5. Energy Cleansing</h6>
//                         <p>Burn sage, palo santo, or incense to clear negative energies from your home and aura. This helps create a fresh, positive space for new beginnings.</p>


//                         <h5>Final Thoughts</h5>
//                         <p>The January 2025 Wolf Moon is a powerful time of emotional and spiritual realignment. As the first full moon of 2025, it sets the energetic tone for the months ahead, urging us to reflect, release, and realign. By understanding how it affects your zodiac sign and engaging in moon rituals, you can harness its transformative power to manifest your dreams.
//                             Are you ready to embrace the magic of the Wolf Moon? Mark your calendar, set your intentions, and let this celestial event guide you toward a year of strength, growth, and renewal.</p>

//                         <h5 className='mb-4'>FAQs</h5>

//                         <div className="accordion" id="accordionExample">
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                         1. Why is it called the Wolf Moon?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         The name comes from ancient traditions where people associated wolves’ howling with the deep winter nights of January.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                         2. How can I make the most of the Wolf Moon?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         Engage in self-reflection, set intentions, and practice moon rituals to align with its energy.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                                         3. Does the Wolf Moon have a spiritual meaning?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         Yes! It signifies transformation, emotional release, and the strength to overcome obstacles.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//                                         4. Can the Wolf Moon affect my sleep?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         Some people experience heightened dreams, restlessness, or an increased sense of awareness during full moons
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 );

//             case ConvertLowerCase("Planetary Alignment 2025"):
//                 return (
//                     <>
//                         <h1>Planetary Alignment 2025: Astrological Significance & Meaning</h1>

//                         <div className='date d-flex align-items-center'>
//                             <img src={Date2} alt="" className='date-img' />
//                             <span className='ms-2 ms-sm-2 ms-xl-3'>12 Feb, 2025</span>
//                         </div>

//                         <p className='mb-3 mb-xl-3 mb-xxl-4'>
//                             The universe is constantly in motion, and in 2025, we are set to witness some fascinating planetary alignments that will shape the cosmic energy around us. Whether you are a seasoned astrologer or just beginning to explore the wonders of the stars, understanding these celestial events can help you harness their power and navigate the year with clarity.
//                             In this blog, we will dive into the planetary alignments of 2025, their astrological significance, and how they may impact your personal and collective experiences. So, if you’re ready to embrace the magic of the cosmos, let’s explore what the planets have in store for us!
//                         </p>

//                         <h5>What is the January 2025 Wolf Moon?</h5>
//                         <p>
//                             Planetary alignment occurs when two or more planets appear to be positioned closely together in the sky from Earth’s perspective. These alignments can bring about powerful shifts in energy, affecting everything from personal growth to global events. In astrology, different alignments - such as conjunctions, oppositions, and trines - carry specific meanings and influences depending on the planets involved.
//                         </p>


//                         <h5>Major Planetary Alignments in 2025</h5>

//                         <h6>1. Jupiter-Uranus Conjunction (April 20, 2025)</h6>
//                         <p>
//                             One of the most anticipated alignments of the year is the Jupiter-Uranus conjunction in Taurus. This rare alignment only happens once every 14 years and is associated with breakthroughs, sudden changes, and revolutionary ideas.
//                         </p>

//                         <h6>Astrological Impact:</h6>
//                         <p className='mb-0'>
//                             Expect unexpected opportunities, financial shifts, and innovation in technology and science.
//                             Taurus governs material wealth and stability, so changes in global economies and personal finances are likely.
//                             On a personal level, this alignment pushes you out of your comfort zone, encouraging risk-taking and unconventional thinking.
//                         </p>
//                         <p>
//                             On a personal level, this alignment pushes you out of your comfort zone, encouraging risk-taking and unconventional thinking.
//                         </p>

//                         <p>
//                             <b>Tip</b>: Think back to 2011, the last time this conjunction occurred. What major life shifts happened for you? This cycle invites a similar wave of transformation - be open to the unexpected!
//                         </p>


//                         <h6>2. Saturn-Neptune Conjunction (February 20, 2025)</h6>
//                         <p>
//                             Another significant event is the Saturn-Neptune conjunction in Aries. This alignment blends discipline (Saturn) with dreams and spirituality (Neptune), creating an interesting paradox of structure versus imagination.
//                         </p>

//                         <h6>Astrological Impact:</h6>
//                         <p className='mb-0'>
//                             You may feel torn between practical responsibilities and creative aspirations.
//                             A major shift in societal norms, government policies, or collective ideologies could take place.
//                         </p>
//                         <p>
//                             Spiritual awakenings and deep introspection will be heightened, making this a great time for meditation and self-discovery.
//                         </p>

//                         <p>
//                             <b>Tip</b>: If you’ve been feeling stuck in a routine or creatively blocked, this transit might just be the breakthrough you need. Pay attention to intuitive nudges - they’re guiding you toward something greater!
//                         </p>


//                         <h6>3. Mercury Retrogrades in Earth Signs</h6>
//                         <p>
//                             Mercury retrograde periods in Capricorn (January), Taurus (May), and Virgo (September) will challenge our communication, decision-making, and technological advancements.
//                         </p>

//                         <h6>Astrological Impact:</h6>
//                         <p className='mb-0'>
//                             Delays and miscommunications will be common, so double-check your plans and avoid signing major contracts.
//                         </p>
//                         <p>
//                             It’s a good time for introspection, revisiting old ideas, and refining long-term goals.
//                             Grounding yourself through nature and mindfulness can help navigate this tricky energy.
//                         </p>

//                         <p>
//                             <b>Tip</b>: Ever sent a text and instantly regretted it? Mercury retrograde is notorious for communication mishaps - think before you hit “send” this year!
//                         </p>


//                         <h6>4. Pluto’s Return to Aquarius (November 19, 2025)</h6>
//                         <p>
//                             Pluto, the planet of transformation, will re-enter Aquarius after briefly moving into Capricorn. This marks a new era of societal and technological shifts.
//                         </p>

//                         <h6>Astrological Impact:</h6>
//                         <p className='mb-0'>
//                             Innovation, AI advancements, and changes in global power structures may accelerate.
//                             Collective consciousness will shift toward humanitarian and futuristic ideals.
//                         </p>
//                         <p>
//                             You may feel an urge to break free from outdated systems and embrace forward-thinking philosophies.
//                         </p>

//                         <p>
//                             <b>Tip</b>: If you’re someone who’s been feeling disillusioned with the world, Pluto’s return to Aquarius might spark a renewed sense of hope. Change is coming - are you ready to embrace it?
//                         </p>



//                         <h5>How These Alignments Affect Each Zodiac Sign?</h5>
//                         <p className='mt-2'>Every planetary movement impacts the zodiac signs differently. Here’s a glimpse of what to expect based on your sun or rising sign:</p>

//                         <ol>
//                             <li>
//                                 <p>
//                                     <b>Aries</b>: Bold career moves and personal reinvention are on the horizon. Stay open to change and embrace
//                                     leadership roles.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Taurus</b>: Financial growth and unexpected shifts in stability will push you toward more independence and
//                                     self-sufficiency.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Gemini</b>: Relationships, networking, and communication take center stage. Be mindful of miscommunications
//                                     during Mercury retrogrades.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Cancer</b>: A strong focus on health, work routines, and emotional well-being. Finding a balance between work
//                                     and rest is key.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Leo</b>: A year of creative breakthroughs, romance, and personal expression. Follow your passions without
//                                     hesitation.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Virgo</b>: Changes in home and family dynamics may arise. Grounding exercises and emotional healing will be
//                                     beneficial.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Libra</b>: Communication skills will be tested, but opportunities for growth in education and personal
//                                     connections are strong.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Scorpio</b>: Financial transformation and self-worth come into play. Investing wisely and setting long-term
//                                     financial goals will be crucial.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Sagittarius</b>: A fresh start in personal identity, self-growth, and new opportunities. Focus on defining who
//                                     you truly are.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Capricorn</b>: Spiritual awakenings and internal growth will take precedence. Meditation and self-reflection
//                                     will be powerful tools.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Aquarius</b>: Big social shifts and career advancements may take place. Trust your intuition and step into
//                                     leadership roles.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Pisces</b>: Career shifts, spiritual growth, and finding a deeper purpose will guide your year. Follow your
//                                     heart’s desires.
//                                 </p>
//                             </li>
//                         </ol>


//                         <h5>Final Thoughts</h5>
//                         <p className='mb-0'>
//                             The planetary alignments in 2025 bring incredible opportunities for transformation, awakening, and expansion. Whether you seek personal growth, career success, or spiritual evolution, these celestial shifts offer guidance and insight.
//                         </p>
//                         <p className='mb-0'>
//                             If you’ve been wondering whether this is your year to take that leap of faith - this is your cosmic green light!
//                         </p>
//                         <p>
//                             Curious about how these alignments will personally impact you? Book a personalized astrology reading today and unlock the secrets of your cosmic journey!
//                         </p>


//                         <h5 className='mb-4'>FAQs</h5>

//                         <div className="accordion" id="accordionExample">
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
//                                         aria-expanded="true" aria-controls="collapseOne">
//                                         1. What is the most significant planetary alignment in 2025?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         The Jupiter-Uranus conjunction in April 2025 is expected to have the most transformative impact, bringing unexpected changes and breakthroughs.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                         data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                         2. Will Mercury retrograde affect my zodiac sign?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         Yes, especially if you have strong placements in Earth signs (Taurus, Virgo, Capricorn). Expect delays and miscommunications during these retrograde periods.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                         data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                                         3. How can I prepare for the Saturn-Neptune conjunction?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         Stay grounded and focused. Balancing practicality with creativity will help to navigate this period effectively.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                         data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//                                         4. What does Pluto’s return to Aquarius mean for society?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         Expect advancements in technology, AI, and social structures. This transit marks a major shift in how we connect and innovate as a collective.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                         data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
//                                         5. How can I use astrology to improve my life in 2025?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         By understanding planetary influences, you can plan important decisions, align your energy with cosmic rhythms, and make empowered choices for personal and professional growth.
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 );

//             case ConvertLowerCase("Axe Astrology 2025"):
//                 return (
//                     <>
//                         <h1>Axe Astrology 2025: A Complete Guide to Navigating Your Future</h1>

//                         <div className='date d-flex align-items-center'>
//                             <img src={Date2} alt="" className='date-img' />
//                             <span className='ms-2 ms-sm-2 ms-xl-3'>12 Feb, 2025</span>
//                         </div>

//                         <p className='mb-3 mb-xl-3 mb-xxl-4'>
//                             Astrology has always fascinated humanity, offering a unique way to understand ourselves, our relationships, and our place in the universe. As we approach 2025, the world of Axe Astrology promises exciting new insights, deeper connections with the cosmos, and even more opportunities for personal growth. Whether you're a seasoned astrology enthusiast or new to the world of celestial guidance, Axe Astrology in 2025 offers valuable wisdom that can help you make empowered decisions and live in alignment with your true self.
//                         </p>

//                         <p>
//                             In this blog, we will explore the significance of Axe Astrology for 2025, how it differs from traditional astrology, and what it has to offer you in the coming year. Plus, we’ll dive into how you can incorporate these astrological principles into your daily life for more clarity, harmony, and success.
//                         </p>


//                         <h5>What is Axe Astrology?</h5>
//                         <p>
//                             Axe Astrology is a modern astrological system that blends ancient wisdom with new-age thinking. It takes the core principles of astrology - planetary movements, sun signs, moon phases, and aspects - and reinterprets them through a new lens. The word "Axe" in this system refers to the concept of the "Axis of Change," which is an understanding of the cycles and shifts in your life. It’s a path that helps you move away from traditional, static predictions and toward a more dynamic, fluid approach to personal development.
//                         </p>

//                         <p>
//                             The essence of Axe Astrology lies in its belief that the cosmos is in constant motion and that these motions influence our lives in ways that we can control and shape. In 2025, Axe Astrology becomes even more relevant as new planetary transits and major astrological events will influence all aspects of our lives - relationships, careers, health, and spiritual journeys.
//                         </p>


//                         <h5>What Does Axe Astrology Offer for 2025?</h5>
//                         <p>In 2025, Axe Astrology will help you tap into the energy of the cosmos in a way that’s more personalized and actionable. Here’s what you can expect:</p>

//                         <h6>1. Personal Growth and Transformation</h6>
//                         <p>2025 will be a year of change. The alignment of the planets and key astrological transits will create opportunities for deep personal transformation. With Axe Astrology, you'll be able to understand how specific planetary energies influence your growth. Whether it’s Saturn’s lessons of discipline or Jupiter’s blessings of expansion, Axe Astrology can help you make the most of each cosmic shift.</p>

//                         <p>Axe Astrology highlights the significance of your individual astrological chart, guiding you to work on your strengths and overcome weaknesses. It will help you set intentions aligned with your soul’s purpose, making this year a potent time for self-improvement.</p>

//                         <h6>2. Love and Relationships</h6>
//                         <p>One of the major areas influenced by astrology is relationships, and Axe Astrology is no different. As we approach 2025, the influence of Venus and Mars will bring shifts in love, romance, and partnerships. With Axe Astrology, you can gain insight into the compatibility of your relationships, understand how your energies align with others, and discover ways to improve communication and deepen emotional bonds.</p>
//                         <p>In 2025, expect to see more opportunities for healing in existing relationships and even new romantic connections, especially for those who are open to growth and self-discovery. Axe Astrology gives you the tools to better understand your relationship dynamics, whether it’s with a partner, friends, or family members.</p>

//                         <h6>3. Career and Finances</h6>
//                         <p>Career paths are also greatly influenced by astrological cycles. With Axe Astrology, you’ll learn about the best times to take risks, seek new opportunities, and develop your professional life. The shifting of planets like Mercury, Saturn, and Uranus will influence the way we approach work, finances, and personal goals.</p>
//                         <p>In 2025, Axe Astrology can guide you through these shifts, offering clarity on when to make a career change, ask for that promotion, or make a significant financial investment. By understanding the planetary influences, you’ll be able to align your actions with the universe's energy, maximizing your chances of success.</p>

//                         <h6>4. Health and Well-Being</h6>
//                         <p>Astrology is often overlooked when it comes to health, but Axe Astrology emphasizes the importance of celestial cycles on our physical and mental well-being. In 2025, Axe Astrology will provide insight into the best times to focus on your health, from improving your diet and exercise regimen to addressing mental health and emotional wellness.</p>
//                         <p>You’ll discover which areas of your health might require attention, and Axe Astrology can offer suggestions on how to work with your personal chart to achieve balance and vitality. Whether you’re working through chronic issues or simply want to enhance your overall well-being, Axe Astrology will help you tap into the right energies.</p>


//                         <h5>Key Transits and Influences to Watch for in 2025</h5>
//                         <p>2025 will be filled with powerful astrological events that will shape the year. Here are a few key transits you should be aware of:</p>

//                         <ul>
//                             <li>
//                                 <p>
//                                     <b>Uranus in Taurus</b>: Uranus will continue its transit through Taurus in 2025, urging you to rethink your approach to material possessions, values, and finances. This energy brings unexpected change, but it also offers opportunities for reinvention and growth, especially in how you handle your financial and material resources.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Saturn in Pisces</b>: Saturn’s transit in Pisces will encourage you to create structure and discipline in your spiritual and emotional life. This energy is perfect for getting serious about your inner work and developing a more grounded connection to your intuition.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Jupiter in Aquarius</b>: Jupiter in Aquarius will bring expansion and growth, particularly in the realms of innovation, technology, and social progress. This energy invites you to break free from old patterns and embrace new, futuristic ways of thinking.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Eclipses</b>: The eclipses in 2025 will bring about significant turning points, especially in matters of destiny and personal transformation. These powerful events are a chance to reset, release, and realign with your soul’s purpose.
//                                 </p>
//                             </li>
//                         </ul>


//                         <h5>How to Make the Most of Axe Astrology in 2025</h5>
//                         <ol>
//                             <li>
//                                 <p>
//                                     <b>Know Your Birth Chart</b>: The foundation of Axe Astrology is understanding your personal chart. Take the time to study your birth chart and understand how the planets, houses, and aspects influence your life. By knowing your astrological blueprint, you can make informed decisions.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Work with the Moon Phases</b>: The Moon plays a significant role in Axe Astrology. Use the different moon phases to set intentions, manifest goals, and release what no longer serves you. Working with the Moon’s cycles will allow you to ride the waves of cosmic energy with ease.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Embrace Change</b>: In 2025, change is inevitable. Axe Astrology will help you understand these changes and give you the tools to embrace them. Rather than resisting, lean into the shifts and see them as opportunities for growth and evolution.
//                                 </p>
//                             </li>
//                             <li>
//                                 <p>
//                                     <b>Stay Aligned with Your True Self</b>: The ultimate goal of Axe Astrology is to help you live authentically. In 2025, stay true to your purpose, and use the guidance of the stars to stay on track. Trust that the universe has your back and that every experience is an opportunity to grow.
//                                 </p>
//                             </li>
//                         </ol>


//                         <h5>Final Thoughts</h5>
//                         <p>As we step into 2025, Axe Astrology offers us a powerful way to align with the celestial energies and create the life we desire. By tapping into the wisdom of the stars, we can navigate the year with clarity, confidence, and a deep sense of purpose.</p>
//                         <p>Ready to discover what 2025 holds for you? Book an astrology session today and start your journey toward personal growth and cosmic alignment.</p>

//                         <h5 className='mb-4'>FAQs</h5>
//                         <div className="accordion" id="accordionExample">
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
//                                         aria-expanded="true" aria-controls="collapseOne">
//                                         What is the difference between Axe Astrology and traditional astrology?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         Axe Astrology focuses on dynamic, ongoing change, emphasizing how planetary shifts influence personal development, rather than just predicting events. It also places a stronger emphasis on aligning with one’s soul’s purpose.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                         data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                         How can Axe Astrology help me in 2025?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         Axe Astrology helps you understand the key transits and cosmic influences for the year, allowing you to align your actions and decisions with the flow of the universe for personal and spiritual growth.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                         data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                                         Is Axe Astrology suitable for beginners?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         Yes! While it incorporates advanced astrological principles, Axe Astrology is designed to be practical and actionable for people at all levels of experience.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                         data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//                                         How can I learn more about my personal astrology chart?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         To learn more about your birth chart and how Axe Astrology applies to you, consider booking a personal astrology reading with a professional astrologer.
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="accordion-item">
//                                 <h2 className="accordion-header">
//                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                         data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
//                                         What should I focus on in 2025 according to Axe Astrology?
//                                     </button>
//                                 </h2>
//                                 <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                     <div className="accordion-body">
//                                         In 2025, focus on embracing personal growth, adapting to change, and aligning with your true self. Pay attention to the influences of Saturn, Uranus, and Jupiter, and use the moon phases to guide your intentions.
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 );

//             default:
//                 return <h1 className='text-center'>Blog not found.</h1>;
//         }
//     }

//     return (
//         <>

//             {/* -------- Blog-Details-Banner Start -------- */}
//             <div className="blog-details-banner pd">
//                 <div className="row justify-content-between align-items-center">
//                     <div className="col-lg-6">
//                         <div className="left">
//                             <h3>
//                                 Blog Details
//                             </h3>
//                             <p>
//                                 Find clarity in love, career, and life. Connect with a <br className='d-none d-sm-block' />
//                                 professional astrologer today!
//                             </p>

//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <div className="right">

//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* -------- Blog-Details-Banner End -------- */}


//             {/* -------- Blog-Details Start -------- */}
//             <div className="blog-details pd">

//                 {renderBlogContent(blogName)}

//             </div>
//             {/* -------- Blog-Details End -------- */}


//         </>
//     )
// }

// export default BlogDetails;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./BlogDetails.css";
import Date2 from "../../assets/Images/Date2.png";
import { Axios } from '../../helper/Axios';

const BlogDetails = () => {
    const { id } = useParams();

    console.log('====================================');
    console.log("id", id);
    console.log('====================================');
    const [data, setData] = useState({});

    const AstrologerDetails = async () => {
        try {
            const res = await Axios.get(`/blog/detail/${id}`);

            console.log("astrologersDetail", res);

            if (res.data.status === true) {
                setData(res?.data?.data);
            }
            else {
                console.error("error");
            }
        } catch (e) {
            console.error("error", e);
        }
    }

    useEffect(() => {
        AstrologerDetails();
    }, [id]);


    return (
        <>

            {/* -------- Blog-Details-Banner Start -------- */}
            <div className="blog-details-banner pd">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="left">
                            <h3>
                                Blog Details
                            </h3>
                            <p>
                                Find clarity in love, career, and life. Connect with a <br className='d-none d-sm-block' />
                                professional astrologer today!
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right">

                        </div>
                    </div>
                </div>
            </div>
            {/* -------- Blog-Details-Banner End -------- */}


            {/* -------- Blog-Details Start -------- */}
            <div className="blog-details pd">

                <>
                    <img src={data?.image} alt="" className='img-fluid blog-img' />
                    <h1 className='mt-4'>{data?.title}</h1>

                    <div className='date d-flex align-items-center'>
                        <img src={Date2} alt="" className='date-img' />
                        <span className='ms-2 ms-sm-2 ms-xl-3'>{data?.date}</span>
                    </div>

                    <p className='mb-3 mb-xl-3 mb-xxl-4'>
                        {data?.description}
                    </p>

                    <h5 className='mb-4'>FAQs</h5>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                    aria-expanded="true" aria-controls="collapseOne">
                                    What is the difference between Axe Astrology and traditional astrology?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Axe Astrology focuses on dynamic, ongoing change, emphasizing how planetary shifts influence personal development, rather than just predicting events. It also places a stronger emphasis on aligning with one’s soul’s purpose.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How can Axe Astrology help me in 2025?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Axe Astrology helps you understand the key transits and cosmic influences for the year, allowing you to align your actions and decisions with the flow of the universe for personal and spiritual growth.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Is Axe Astrology suitable for beginners?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes! While it incorporates advanced astrological principles, Axe Astrology is designed to be practical and actionable for people at all levels of experience.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How can I learn more about my personal astrology chart?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    To learn more about your birth chart and how Axe Astrology applies to you, consider booking a personal astrology reading with a professional astrologer.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    What should I focus on in 2025 according to Axe Astrology?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    In 2025, focus on embracing personal growth, adapting to change, and aligning with your true self. Pay attention to the influences of Saturn, Uranus, and Jupiter, and use the moon phases to guide your intentions.
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            </div>
            {/* -------- Blog-Details End -------- */}


        </>
    )
}

export default BlogDetails;