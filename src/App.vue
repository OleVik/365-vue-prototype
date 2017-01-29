<template>
  <div id="outer_wrapper">
    <navigation :navigation="navigation"></navigation>
    <main class="wrapper container-fluid" id="wrapper">
      <top :header="header"></top>
      <div class="row">
        <section class="team container" id="team">
          <team :team="team"></team>
        </section>
        <section class="work container" id="work">
          <work :work="work"></work>
        </section>
        <section class="services container" id="services">
          <services :services="services"></services>
        </section>
        <section class="contact container" id="contact">
          <contact :contact="contact"></contact>
        </section>
        <bottom :bottom="bottom"></bottom>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Top from './components/Top'
import Team from './components/Team'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'
import Bottom from './components/Bottom'

export default {
  name: 'app',
  components: {
    Navigation,
    Top,
    Team,
    Work,
    Services,
    Contact,
    Bottom
  },
  data () {
    return {
      navigation: [
        { name: 'Team', ref: '#team' },
        { name: 'Work', ref: '#work' },
        { name: 'Services', ref: '#services' },
        { name: 'Contact', ref: '#contact' }
      ],
      header: {
        title: 'ThreeSixtyFive',
        subtitle: 'Web Development and Journalism',
        image: require('./assets/1081.jpg')
      },
      team: {
        title: 'The people behind ThreeSixtyFive',
        members: {
          left: {
            name: 'Ole Vik',
            title: 'Web Developer & Designer',
            description: '‘I want a clean cup,’ interrupted the Hatter: ‘let’s all move one place on.’ He moved on as he spoke, and the Dormouse followed him: the March Hare moved into the Dormouse’s place, and Alice rather unwillingly took the place of the March Hare. The Hatter was the only one who got any advantage from the change: and Alice was a good deal worse off than before, as the March Hare had just upset the milk-jug into his plate.',
            image: require('./assets/ole.jpg'),
            linkedin: 'https://no.linkedin.com/in/olehhvik',
            mail: true
          },
          right: {
            name: 'Fredrik Tombra',
            title: 'Journalist',
            description: "I been saying that shit for years. And if you heard it, that meant your ass. I never gave much thought to what it meant. I just thought it was some cold-blooded shit to say to a motherfucker before I popped a cap in his ass. But I saw some shit this morning made me think twice. See, now I'm thinking, maybe it means you're the evil man, and I'm the righteous man, and Mr. 9 Millimeter here? He's the shepherd protecting my righteous ass in the valley of darkness. Or it could mean you're the righteous man and I'm the shepherd and it's the world that's evil and selfish. Now I'd like that. But that shit ain't the truth. The truth is…you're the weak, and I am the tyranny of evil men. But I'm trying, Ringo. I'm trying real hard to be the shepherd.",
            image: require('./assets/fredrik.jpg'),
            linkedin: 'https://www.linkedin.com/in/fredrik-holme-tombra-93380859/',
            mail: true
          }
        }
      },
      work: {
        title: 'Recent Works',
        description: '‘The Dormouse is asleep again,’ said the Hatter, and he poured a little hot tea upon its nose. The Dormouse shook its head impatiently, and said, without opening its eyes, ‘Of course, of course; just what I was going to remark myself.’',
        items: [
          { title: 'Work One', image: require('./assets/14.jpg'), description: "“In a car you're always in a compartment, and because you're used to it you don't realize that through that car window everything you see is just more TV. You're a passive observer and it is all moving by you boringly in a frame.\nOn a cycle the frame is gone. You're completely in contact with it all. You're in the scene, not just watching it anymore, and the sense of presence is overwhelming.”\n― Robert M. Pirsig, Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values" },
          { title: 'Work Two', image: require('./assets/43.jpg'), description: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee." },
          { title: 'Work Three', image: require('./assets/69.jpg'), description: '“Skepticism is thus a resting-place for human reason, where it can reflect upon its dogmatic wanderings and make survey of the region in which it finds itself, so that for the future it may be able to choose its path with more certainty. But it is no dwelling-place for permanent settlement. Such can be obtained only through perfect certainty in our knowledge, alike of the objects themselves and of the limits within which all our knowledge of objects is enclosed.”\n― Immanuel Kant, Critique of Pure Reason' },
          { title: 'Work Four', image: require('./assets/47.jpg'), description: '“Society is elitist,” says Debord. Lacan’s critique of neodeconstructivist dialectic theory states that the law is intrinsically impossible. Marx uses the term ‘neodeconstructivist dialectic theory’ to denote not narrative, but postnarrative.\n“Sexual identity is dead,” says Foucault; however, according to Scuglia, it is not so much sexual identity that is dead, but rather the absurdity of sexual identity. The main theme of the works of Joyce is a textual totality. Thus, Sartre promotes the use of semiotic narrative to modify and read consciousness.' }
        ]
      },
      services: {
        title: 'Services',
        items: [
          { title: 'Web Development', image: require('./assets/88.jpg'), brief: '“Alice asked the Cheshire Cat”, who was sitting in a tree, “What road do I take?” The cat asked, “Where do you want to go?” “I don’t know,” Alice answered. “Then,” said the cat, “it really doesn’t matter, does it?”', description: "“And how do you know that you're mad? To begin with,” said the Cat, “a dog's not mad. You grant that?” “I suppose so, said Alice.” “Well then,” the Cat went on, “you see a dog growls when it's angry, and wags it's tail when it's pleased. Now I growl when I'm pleased, and wag my tail when I'm angry. Therefore I'm mad.”\n― Cheshire Cat, Alice's Adventures in Wonderland" },
          { title: 'SEO Optimization', image: require('./assets/101.jpg'), brief: 'Luxurious food and drinks, in no way protect you from harm. Wealth beyond what is natural, is no more use than an overflowing container. Real value is not generated by theaters, and baths, perfumes or ointments, but by philosophy.', description: 'Is God willing to prevent evil, but not able?\nThen he is not omnipotent.\nIs he able, but not willing?\nThen he is malevolent.\nIs he both able and willing?\nThen whence cometh evil?\nIs he neither able nor willing?\nThen why call him God?\n― Epicurus in Lactantius, On the Anger of God' }
        ]
      },
      contact: {
        title: 'Contact Us',
        action: '//flipmail.co/api/L6njatSIPIiOGZ9UUzo5',
        after: 'https://olevik.me/',
        replyto: '%email',
        fields: {
          name: {
            label: 'Name',
            name: 'name',
            placeholder: 'Name',
            value: ''
          },
          email: {
            label: 'Email',
            name: 'email',
            placeholder: 'Email',
            value: ''
          },
          message: {
            label: 'Message',
            name: 'message',
            placeholder: 'Message',
            value: ''
          }
        }
      },
      bottom: '&copy; 2016, All Rights Reserved.\nDesigned by [Ole Vik](https://olevik.me/).'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
