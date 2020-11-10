import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Resources.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const Resources = () => {
    return (
        <div className="resources-container container">
            <div className="resource-heading resource-section container-fluid">
            <Row className="title-header justify-content-center">
                <div>
                    <Col className="inline-x col-md-4">
                    <div className="image-container text-center">
                        <img className="computer" src="https://upload.wikimedia.org/wikipedia/commons/7/70/Hands_typing_on_white_laptop_scene.svg" alt="File:Hands typing on white laptop scene.svg"></img>
                    </div>
                    </Col>
                    <Col className="inline-x col-md-8">
                        <div className="resource-text">
                            <h1 className="display-1 font-weight-normal">Resources</h1>
                        </div>
                    </Col>
                </div>
            </Row>
            </div>
            <div className="course-resources resource-section container-fluid">
            <h1 className="display-4 text-center font-weight-light">Course Resources</h1>
            <Row>
                <div className="card-deck">
                    <div className="card shadow" onClick="handleFirstResource">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg" alt="File:Closed Book Icon.svg"/>
                        <div className="card-body">
                            <h5 className="card-title">Textbook: Ace the SAT Essay</h5>
                            <p className="card-text">How to master the timed writing process by Dana L. Lebo, PHD</p>
                            <a className="text-right" href="https://www.amazon.com/Ace-SAT-Essay-Writing-Process/dp/1934442380/ref=cm_cr_pr_product_top" target="_blank">Textbook link...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/0/02/201807_book_B.svg" alt="File:201807 book B.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Course Material: Binder Inserts</h5>
                            <p className="card-text">Everything you need for the virtual workshop from example essay questions to detailed material. Please see the link below to view the pdf.</p>
                            <a className="text-right" href="../styles/binder_inserts.pdf" target="_blank">View PDF...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Magnifying_glass_icon_mgx2.svg" alt="File:Magnifying glass icon mgx2.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Virtual Workshop Overview</h5>
                            <p className="card-text">For the first time in history, most colleges have dropped the requirement for standardized test scores.  Due to the pandemic, they are turning instead to the personal essay as one of the biggest factors in college admission...</p>
                            <a className="text-right" href="../styles/workshop_desc.pdf" target="_blank">Read more...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                </div>

            </Row>
            </div>
            <div className="news-container resource-section container-fluid">
            <h1 className="display-4 text-center font-weight-light">News Articles</h1>
            <Row>
                <div className="card-deck">
                    <div className="card shadow">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/1/19/%D0%9C%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D0%B0.07.svg" alt="File: Woman.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Writing the Essay: Sound Advice from an Expert</h5>
                            <p className="card-text">By Parke Muth, Assistant Dean of Admission, University of Virginia</p>
                            <a className="text-right" href="..." target="_blank">Read more...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/5/57/130-man-student-2.svg" alt="File:130-man-student-2.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Workshop Helps Students Write Winning College Applications</h5>
                            <p className="card-text">And Build Competency in a Much-Valued Leadership Skill</p>
                            <a className="text-right" href="..." target="_blank">Read more...</a>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                </div>

            </Row>
            <Row>
                <div className="card-deck">
                    <div className="card shadow">
                        <img className="card-img-top" src="../styles/resources-photos/almightyessay.jpg" alt="Laura Chouette from Unsplashed" />
                        <div className="card-body">
                        <h5 className="card-title"><a href="https://www.nytimes.com/2011/01/09/education/09guidance-t.html" className="article-link">The Almighty Essay</a></h5>
                            <p className="card-text">Trip Gabriel</p>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                </div>

            </Row>

            </div>
        </div>
    );
}

const Resources2 = () => {
    return (<div className="source-container">
        <div className="source-header"><h1 className="display-4 text-center font-weight-normal">Writing the Essay: Sound Advice from an Expert</h1>
        <h4 className="text-center">By Parke Muth, Assistant Dean of Admission, University of Virginia</h4></div>
        <div className="source-body">
        <p>Fast Food. That's what I think of when I try to draw an analogy with the process of reading application essays.</p>
        <p><strong>The bad</strong>. Ninety percent of the applications I read contain what I call McEssays &ndash; usually five-paragraph essays that consist primarily of abstractions and unsupported generalization. They are technically correct in that they are organized and have the correct sentence structure and spelling, but they are boring. Sort of like a Big Mac. I have nothing against Big Macs, but the one I eat in Charlottesville is not going to be fundamentally different from the one I eat in Paris, Peoria or Palm Springs. I am not going to rave about the quality of a particular Big Mac. The same can be said about the generic essay. If an essay starts out: &ldquo;I have been a member of the band and it has taught me leadership, perseverance and hard work,&rdquo; I can almost recite the rest of the essay without reading it. Each of the three middle paragraphs gives a bit of support to an abstraction, and the final paragraph restates what has already been said. A McEssay is not wrong, but it is not going to be a positive factor in the admission decision. It will not allow a student to stand out.<br /> A student who uses vague abstractions poured into a preset form will end up being interpreted as a vague series of abstractions. A student who uses clich&eacute; becomes, in effect, a clich&eacute;. If we are what we eat, we are also what we write.</p>
        <p>Not only does a preset form lead to a generic essay, so does a generic approach to what is perceived as the right topic. Far too many students begin the search of what to write about by asking: What does my college want to hear? The thinking goes something like this: If I can figure out what they are looking for, and if I can make myself look like that, then I&rsquo;ll improve my chances.</p>
        <p>Several years ago we asked students to describe an invention or creation from the past that was important to them. Our No.1 response &ndash; at least a thousand people &ndash; was the Declaration of Independence. This might make some people think that our college bound students are wonderfully patriotic, but given that my institution was found by Thomas Jefferson, I have a better answer. My guess is that a significant portion of the people who chose the Declaration did so because they thought we would want to hear about how much they admired Thomas Jefferson. While this may be a noble sentiment or, in some cases, a cynical maneuver, it ultimately meant that we had a thousand essays that sounded pretty much alike and therefore did not affect the admission decision. We are not looking for students who all think the same way, believe the same thing, or write the same essay.</p>
        <p>Too often, however students who want to avoid sounding generic with respect to form or content choose exactly the wrong remedy; they think that bigger topics &ndash; or bigger words &ndash; are better. But it is almost impossible, in 500 words, to write well about vast topics such as the death of a loved one (see excerpt: &ldquo;the bad&rdquo;). I am not advocating longer essays (just remember how many applications admissions officers need to read); I am advocating essays with a sharp focus that allows for detail. Detail is what differentiates one essay from another, one applicant from another.</p>
        <p>Instead of detail, however, students try to impress us with big words. In trying to make a topic sound intellectual, students resort to the thesaurus and, as a result, end up sounding pretentious or at least insecure about using the voice they would use to describe an event to a friend. The student assumes that these &ldquo;impressive&rdquo; words intensify the experience for a reader rather than diminish it. Before students send off their essay, they should always read it aloud to someone who knows them well; let that person decide if an individual&rsquo;s voice comes through.</p>
        <p><strong>The good</strong>. A good essay is not good because of the topic but because of the voice. A good writer can make any topic interesting, and a weak writer can make even the most dramatic topic a bore.</p>
        <p>Students need only to recall the difference between two simple concepts &ndash; showing and telling. A good essay always shows; a weak essay always tells.</p>
        <p>By showing, a writer appeals to all of the senses, not just the visual. To show means to provide a feast for the eyes, ears and, depending on the essay, the mouth, nose or skin. But rather than telling a reader what show is, it is much easier to show what showing is.</p>
        <p>The student whose essay appears below, an example of &ldquo;the good,&rdquo; has undertaken the task of describing &ndash; that is, of showing, in detail &ndash; the deterioration of her father as he gets treated for cancer. I do not know of a single member of our staff who was not deeply affected by this essay, the whole of which is as well done as the excerpt. What is impressive about the essay is the willingness of the writer to carefully notice everything that is happening. She opens with a sound, that coughing, and then creates a visual scene that we can see clearly. I said before that writing about death and sickness is perhaps one of the most difficult topics to tackle in a college essay, but here we have an example of why this topic can demonstrate not only writing ability but the courage to face a terrible situation head-on with intellect and power. Compare this with the other essay about death. There, even though the writer was saturated with emotions, he was merely telling us, in abstract terms, what he felt.</p>
        <p>A writer who shows respects the intelligence of the reader; a writer who tells focuses on the ideas, or the perceived ideas, behind the details. He or she is more concerned about demonstrating the ability to be abstract then the ability to be precise. In a short, personal essay, precision is power.</p>
        <p><strong>The risky</strong>. Any student who has already learned the basics of showing should think about taking a risk on the college essay. What kind of risk? Think about starting an essay with: &ldquo;I sat in the back of the police car.&rdquo; Or, as in the example (below): &rdquo; The woman wanted breasts.&rdquo; These first sentences use what journalists call a hook. The sentence reaches out from the page and grabs our attention. It creates a bit of controversy and an expectation that the writer might be willing to take academic risks in the classroom. A good hook does not mean that a good essay will follow, but it does mean that a reader will look forward to seeing what will unfold.</p>
        <p>A risky essay can border on the offensive. In some cases, as in the excerpt, it is possible that a few readers might write off an applicant based upon questionable taste. That is the danger of taking a risk. People wonder if they will be penalized if they do take a risk in an application. They want to know, in other words, if there is any risk in taking a risk. Yes, there is. I can say, however, that my experience in the admissions field has led me to conclude the great majority of admissions officers are an open-minded lot and that to err on the side of the baroque might not be as bad as to stay in the comfort of the boring.</p>
        <p>The best essays are crafted not from a formula for success but by a voice that is practiced. Those who are willing to take a risk, to focus on that part of the world that matters to them and to show the passion and the practice it takes to write about it well, will help their chances of admission through their essay.</p>
        <p><strong>Excerpts from essays to U.Va.</strong></p>
        <p><strong>The bad:</strong>From an early age, we accept death as the inevitable, but do not comprehend its actual denotation. Death is the impending future that all people must eventually grasp. In my early teens, my grandfather tragically perished. As a youth who did not identify with such a cataclysm I was saturated with various emotions. Initially, I was grieved by the loss of a loved one and could not understand why this calamity had to befall upon my family. I always considered death to have a devastating effect, but was shocked by the emotional strain it places upon an individual.</p>
        <p><strong>The good:</strong>The coughing came first, the hacking in the middle of the night. Then there were the multiple doctor visits, each one the same: the little white rooms with magazines where I tried not to stare at the bald, gaunt woman across from me. One of the white coats finally said something, steadily, forecasting an 80 percent change of rain. The list of second opinions grew too long to count, looking for someone to say the right thing. Finally, there was relief in hearing the name of a kinder killer: lymphoma.</p>
        <p><strong>The risky:</strong>The woman wanted breasts. She had fame waiting on her like a slave, money dripping from her fingertips and men diving into her being. Yet she wanted breasts because the world wanted her to have a bust. She looked at the big black and white glossy of herself arching on a silken carpet and knew that the world would be satisfied with her airbrush deception.</p>
        <p>This woman is us. My family has been in existence for nearly 20 years now, and we are aging and losing our own breasts and tight face – the giddy happiness of a child’s unconditional love for his family, the young family’s need for each other. Yet, we are constantly pressured by society’s family icons into compromising our change and age instead of accepting it.</p>
        </div>
        </div>);
        }

    const Resources3 = () => {
        return (
        <div className="source-container">
            <div className="source-header">
                <h1 className="display-4 text-center font-weight-normal">
                <strong>
                    Workshop Helps Students Write Winning College Applications
                </strong>
                </h1>
                <h5 className="text-center font-weight-light">
                <strong>
                    And Build Competency in a Much-Valued Leadership Skill
                </strong>
                </h5>
                <p>
                <strong>
                    <em>Chapel Hill, NC &ndash;</em>
                    <p><strong>FOR IMMEDIATE RELEASE </strong><strong>November 24, 2009</strong></p>
                </strong>
                </p>
            </div>
            <div className="source-body">
                <p>Graduates of the <strong><em> Write Workshop </em></strong>
                are routinely accepted at prestigious colleges and universities
                such as Dartmouth, Yale, University of Pennsylvania, Stanford,
                University of North Carolina, Villanova, Georgetown, and many
                other top-notch institutions.</p>
                
                <p>While grades and SAT scores are important in college admissions
                applications, it is the personal essay that reveals the
                applicant&rsquo;s innermost thoughts, aspirations and interests,
                and expresses what the young writer might contribute to campus
                life.&nbsp; An honest, vivid essay can mitigate the effect of
                less-than-stellar grades or test scores.&nbsp; At the same time,
                a wooden, superficial essay can take away the potential edge
                that superior grades and SAT scores provide. &nbsp; At the&nbsp;
                <em>Write Workshop</em>, rising high school sophomores, juniors, 
                and seniors engage in the process of <strong>writing engaging, 
                well-crafted personal essays for college applications.</strong>
                </p>

                <p>Strong <strong>writing skills </strong>
                are essential to professional and personal success beyond the
                college years, too:&nbsp; The authors of a National Commission
                on Writing survey &ndash; <em>Writing:&nbsp; A Ticket to Work&hellip;
                or a Ticket Out</em>&ndash; concluded that <strong> &ldquo;writing 
                appears to be a &lsquo;marker&rsquo; attribute of high-skill, 
                high-wage, professional work</strong>&rdquo;
                (<a href="http://www.writingcommission.org/prod_downloads/writingcom/writing-ticket-to-work.pdf">http://www.writingcommission.org/prod_downloads/writingcom/writing-ticket-to-work.pdf.&nbsp;</a>)
                </p>

                <p>Fully 86 percent of corporate respondents to the
                Commission&rsquo;s survey said that they hold poorly written
                application materials against a job applicant.&nbsp; And more
                than half of all responding companies take writing skills into
                account in making promotion decisions for salaried
                employees.&nbsp;&nbsp;  
                </p>

                <p>The message is clear.&nbsp; In order to make it to top
                management, aspiring leaders must be able to build commitment to
                their ideas through well-thought-out, compellingly expressed
                communication, both spoken and written.&nbsp; Ideally,
                students&rsquo; high school and college writing curricula should
                prepare them for this challenge.&nbsp;&nbsp;
                </p>

                <p>The <em>Write Workshop </em>
                builds on students&rsquo; existing skills, not only enhancing
                their college applications, but the overall quality of their
                writing.&nbsp; One recent participant exclaimed,&nbsp;
                </p>

                <p><em>&ldquo;I learned a ton!&nbsp; This was an amazing experience
                and my writing improved significantly!&nbsp; Not only did this
                class help my college essay, but it will continue to help me
                with my writing.&nbsp; Thank you so much for all the
                advice!&nbsp; It helped more than words could ever
                explain.&rdquo;&nbsp;&nbsp;</em>
                </p>

                <p>Over the course of an intensive four-day summer program, <em>Write Workshop</em>participants:</p>
                <ul>
                <li>
                    Plan and draft college application essay(s); receiving
                    extensive feedback on their work.
                </li>
                <li>
                    Learn what distinguishes a successful essay from an
                    unsuccessful one.
                </li>
                <li>
                    Explore their passions, values, and commitments and discover
                    how they can be expressed through writing to connect with
                    readers.
                </li>
                <li>
                    Practice the critical art of revision under expert
                    guidance.&nbsp;
                </li>
                </ul>

                <p><em>The Write Workshop </em>
                is facilitated by Dr. Dana Lebo, a leadership development coach
                in Chapel Hill, NC. She first established this successful
                essay-writing program in the greater Princeton, N.J., area in
                1999, drawing on her experience as a licensed psychologist,
                leadership and communications skills development consultant, and
                former teacher of undergraduate writing at Rutgers
                University.&nbsp; She has taught hundreds of successful college
                application essay-writing workshops to rising high school
                sophomores, juniors, and seniors seeking acceptance by the
                nation&rsquo;s top colleges and universities.&nbsp; Dr. Lebo
                earned her Ph.D. from Columbia University and M.A. and B.A. from
                Georgetown University.
                </p>
            </div>
          </div>
        )
    }


export default Resources;