const { createApp } = Vue;

const my_component = {
  template: `
    <h1>Welcome To VueJS </h1>
    <h1>Welcome To VueJS </h1>
    <h1>Welcome To VueJS </h1>
    `,
  data() {
    return {};
  },
};

createApp({
  data() {
    return {};
  },
  components: {
    my_component,
  },
}).mount("#app_root_2");

createApp({
  data() {
    return {
      message: "Hello",
      link: "https://www.google.com",
      number: 0,
      name: "Loay",
      email: "",
      password: "",
      numberOne: 0,
      numberTwo: 5,
      title: "",
      fontSize: 20,
      age: 24,
      skills: [
        "python",
        "css",
        "javascript",
        "html",
        "arduino",
        {
          name: "soso",
          id: 5,
          age: 21,
        },
        {
          name: "ahmad",
          id: 3,
          age: 40,
        },
        {
          name: "mohammed",
          id: 1,
          age: 29,
        },
      ],
      cards: [
        {
          product: "Potato",
          price: "5$",
          img: "/imgs/potato.jpg",
          color: ["red", "yellow", "green", "white", "purple", "blue"],
        },
        {
          product: "Tomato",
          price: "7$",
          img: "/imgs/Tomato_je.jpg",
          color: ["red", "purple", "blue"],
        },
        {
          product: "Carrot",
          price: "3$",
          img: "/imgs/carrot.jpg",
          color: ["purple", "blue", "yellow", "green"],
        },
        {
          product: "Strawberry",
          price: "10$",
          img: "/imgs/Strawberry.jpg",
          color: ["red", "purple", "blue", "green"],
        },
        {
          product: "Banana",
          price: "8$",
          img: "/imgs/Banana.jpg",
          color: ["purple", "blue", "yellow", "green"],
        },
        {
          product: "Mangoooo",
          price: "20$",
          img: "/imgs/Mango.jpg",
          color: ["red", "yellow", "green"],
        },
      ],
    };
  },
  methods: {
    sayHi(name, message) {
      return `Hello My friend ${name} ${message}`;
    },
    testFunction() {
      console.log("Dont TOuch meeee");
    },
    incrementOne() {
      return this.number++;
    },
    sendData() {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      console.log(newUser);
    },
    selectColor(color) {
      this.title = color;
      this.checkColor();
    },
    checkColor() {
      let color = document.getElementById(this.title);
      color.setAttribute("checked", "#");
    },
    fontBigger() {
      this.fontSize += 10;
    },
    fontSmaller() {
      this.fontSize -= 10;
    },
    checkRefs() {
      console.log(this.$refs);
    },
  },
  computed: {
    numberOneUp() {
      console.log("1");
      return this.numberOne * 2;
    },
    numberTwoUp() {
      console.log("2");
      return this.numberTwo + 10;
    },
    numberTTwoUp() {
      console.log("3");
      return "this.numberTwo  + 10";
    },
  },
  components: {
    my_component,
  },
}).mount("#loay-app");
