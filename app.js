const app = Vue.createApp({
  data() {
    return {
      user1Active: false,
      user2Active: false,
      visibleActive: true,
      hiddenActive: false,
      color: '',
    };
  },
  computed: {
    user1() {
      return { user1: this.user1Active };
    },
    user2() {
      return { user2: this.user2Active };
    },
    visible() {
      return { visible: this.visibleActive };
    },
    hidden() {
      return { hidden: this.hiddenActive };
    },
    colorStyle() {
      return { color: this.color };
    },
  },
  methods: {
    userHandler(event) {
      const usrInput = event.target.value;
      if (usrInput === 'user1') {
        if (this.user2Active) {
          this.user2Active = false;
        }
        this.user1Active = !this.user1Active;
        console.log(`user1: ${this.user1Active}\nuser2: ${this.user2Active}`);
      } else if (usrInput === 'user2') {
        if (this.user1Active) {
          this.user1Active = false;
        }
        this.user2Active = !this.user2Active;
        console.log(`user1: ${this.user1Active}\nuser2: ${this.user2Active}`);
      } else {
        this.user1Active = this.user2Active = false;
        console.log(`user1: ${this.user1Active}\nuser2: ${this.user2Active}`);
      }
    },
    visibilityHandler() {
      if (this.visibleActive && !this.hiddenActive) {
        console.log(
          `Old state:\nVisible: ${this.visibleActive}\nHidden: ${this.hiddenActive}`
        );
        this.visibleActive = false;
        this.hiddenActive = true;
        console.log(
          `New state:\nVisible: ${this.visibleActive}\nHidden: ${this.hiddenActive}`
        );
      } else {
        console.log(
          `Old state:\nVisible: ${this.visibleActive}\nHidden: ${this.hiddenActive}`
        );
        this.visibleActive = true;
        this.hiddenActive = false;
        console.log(
          `New state:\nVisible: ${this.visibleActive}\nHidden: ${this.hiddenActive}`
        );
      }
    },
    colorHandler(event) {
      console.log(`New color inline: ${event.target.value}`);
      this.color = event.target.value;
    },
  },
});

app.mount('#assignment');
