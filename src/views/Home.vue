<template>
  <background>
    <navbar />
    <div class="home">
      <!-- แบบประเมิน -->
      <h2 class="pl-3 pb-10 text-2xl font-bold tracking-widest">"What do you know about Doraemon"</h2>
      <div class="w-screen h-full">
        <div class="container">
          <div class="survey-container">
            <img
              class="pl-24"
              src="https://i.kym-cdn.com/photos/images/newsfeed/000/913/683/d76.jpg"
            />
            <form @submit.prevent="submitForm">
              <box>
                <label class="label" for="name">Enter your FanClub's NAME:</label>
                <input
                  class="input"
                  :class="{ 'bg-red-50': invalidNameInput }"
                  id="name"
                  type="text"
                  v-model.trim="enteredName"
                  @blur="validateName"
                />

                <p
                  v-if="invalidNameInput"
                  class="text-red-500"
                >♥♥♥ Please, Enter your FanClub's NAME !!! ♥♥♥</p>
              </box>

              <box>
                <label class="label" for="name">How old are you:</label>

                <input
                  class="input"
                  :class="{ 'bg-red-50': invalidAgeInput }"
                  id="age"
                  type="text"
                  v-model.trim="enteredAge"
                  @blur="validateAge"
                />

                <p v-if="invalidAgeInput" class="text-red-500">♥♥♥ Please, Enter your Age!!! ♥♥♥</p>
              </box>

              <box>
                <h2 class="heading">Do you think Doraemon is the most cartoon character?</h2>

                <div>
                  <input type="radio" name="answer1" id="answer-yes1" value="Yes" v-model="answer1" />
                  <label class="label" for="answer-yes1">Yes</label>
                </div>

                <div>
                  <input type="radio" name="answer1" id="answer-no1" value="No" v-model="answer1" />
                  <label class="label" for="answer-no1">No</label>
                </div>

                <p
                  v-if="invalidAnswerInput1"
                  class="text-red-500"
                >♥♥♥ Please, Enter your Answer!!! ♥♥♥</p>
              </box>

              <box>
                <h2 class="heading">Do you love or like Doraemon more than Doraeme</h2>

                <div>
                  <input type="radio" name="answer2" id="answer-yes2" value="Yes" v-model="answer2" />
                  <label class="label" for="answer-yes2">Yes</label>
                </div>

                <div>
                  <input type="radio" name="answer2" id="answer-no2" value="No" v-model="answer2" />
                  <label class="label" for="answer-no2">No</label>
                </div>

                <p
                  v-if="invalidAnswerInput2"
                  class="text-red-500"
                >♥♥♥ Please, Enter your Answer!!! ♥♥♥</p>
              </box>

              <box>
                <h2 class="heading">Do you think Doraemon is the cat robot</h2>

                <div>
                  <input type="radio" name="answer3" id="answer-yes3" value="Yes" v-model="answer3" />
                  <label class="label" for="answer-yes3">Yes</label>
                </div>

                <div>
                  <input type="radio" name="answer3" id="answer-no3" value="No" v-model="answer3" />
                  <label class="label" for="answer-no3">No</label>
                </div>

                <p
                  v-if="invalidAnswerInput3"
                  class="text-red-500"
                >♥♥♥ Please, Enter your Answer!!! ♥♥♥</p>
              </box>

              <button class="btn">Submit</button>
            </form>
            <div>
              <ul v-for="survey in surveyResults" :key="survey.id">
                <li>
                  <span>{{ survey.name }}</span>
                 <p>Your old is :</p>
                  <span>{{ survey.age }}</span>
                  <p>Your answer of Doraemon's FanClub is :</p>
                  <span>{{ survey.answer1 }}</span>,
                  <span>{{ survey.answer2 }}</span>,
                  <span>{{ survey.answer3 }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </background>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import background from '@/components/background.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    background
  },
  data() {
    return {
      enteredName: "",
      invalidNameInput: false,
      enteredAge: "",
      invalidAgeInput: false,
      answer1: null,
      invalidAnswerInput1: false,
      answer2: null,
      invalidAnswerInput2: false,
      answer3: null,
      invalidAnswerInput3: false,
      surveyResults: [],
    };

  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      this.invalidAgeInput = this.enteredAge === "" ? true : false;
      this.invalidAnswerInput1 = this.answer1 === null ? true : false;
      this.invalidAnswerInput2 = this.answer2 === null ? true : false;
      this.invalidAnswerInput3 = this.answer3 === null ? true : false;

    },
    validateName() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      console.log(`name: ${this.invalidNameInput}`)
    },
    validateAge(){
      this.invalidAgeInput= this.enteredAge ==='' ? true : false 
      console.log(`age : ${this.invalidAgeInput}`);
    }



    
  }
}
</script>
