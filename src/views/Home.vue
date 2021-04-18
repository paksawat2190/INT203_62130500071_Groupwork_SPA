<template>
  <background>
    <navbar />
    <div class="home w-screen">
      <!-- แบบประเมิน -->
      <h2 class="pl-3 pt-5 pb-10 text-2xl font-bold tracking-widest">"What do you know about Doraemon"</h2>
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
                  placeholder="    ENTER HERE ☺☺ "
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
                  placeholder="    ENTER HERE ☺☺ "
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
            <div class="pl-10 pt-6">
              <ul v-for="survey in surveyResults" :key="survey.id">
                <li>
                  <p>
                    Your FanClub's Name is
                    <span>{{ survey.name }}</span>
                  </p>

                  <p>
                    Your old is
                    <span>{{ survey.age }}</span>
                  </p>

                  <p>
                    Your answer of Doraemon's FanClub is :
                    <span>{{ survey.answer1 }}</span>,
                    <span>{{ survey.answer2 }}</span>,
                    <span>{{ survey.answer3 }}</span>
                  </p>

                  <button @click="showData(survey)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
                      />
                    </svg>
                  </button>
                  <button @click="deleteSurvey(survey.id)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </background>

<bot/>
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
      isEdit: false,
      editId: "",
      url: "http://localhost:3000/surveyResults",
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
        if ((!this.invalidNameInput&&!this.invalidAgeInput&&!this.invalidAnswerInput1&&!this.invalidAnswerInput2&&!this.invalidAnswerInput3)) {
      {
        if (this.isEdit) {
          this.editSurvey({
            id: this.editId,
            name: this.enteredName,
            age: this.enteredAge,
            answer1: this.answer1,
            answer2: this.answer2,
            answer3: this.answer3,
          });
        } else {
          this.addNewSurvey({
            name: this.enteredName,
            age: this.enteredAge,
            answer1: this.answer1,
            answer2: this.answer2,
            answer3: this.answer3,
          });
        }
      }
    }
      this.enteredName = "";
      this.enteredAge = "";
      this.answer1 = null;
      this.answer2 = null;
      this.answer3 = null;

    },
    validateName() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      console.log(`name: ${this.invalidNameInput}`)
    },
    validateAge() {
      this.invalidAgeInput = this.enteredAge === '' ? true : false
      console.log(`age : ${this.invalidAgeInput}`);
    },
    showData(oldSurvey) {
      this.isEdit = true
      this.editId = oldSurvey.id
      this.enteredName = oldSurvey.name
      this.enteredAge = oldSurvey.age
      this.answer1 = oldSurvey.answer1,
        this.answer2 = oldSurvey.answer2,
        this.answer3 = oldSurvey.answer3
    },
    async editSurvey(editingSurvey) {
      try {
        const res = await fetch(`${this.url}/${editingSurvey.id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name: editingSurvey.name,
            age: editingSurvey.age,
            answer1: editingSurvey.answer1,
            answer2: editingSurvey.answer2,
            answer3: editingSurvey.answer3,
          })
        })
        const data = await res.json()
        this.surveyResults = this.surveyResults.map((survey) =>
          survey.id === editingSurvey.id
            ? {
              ...survey, name: data.name, age: data.age, answer1: data.answer1,
              answer2: data.answer2,
              answer3: data.answer3,            
}
            : survey
        )

        this.isEdit = false
        this.editId = ''
        this.enteredName = ''
        this.enteredAge = null
        this.answer1 = null;
        this.answer2 = null;
        this.answer3 = null;

      } catch (error) {
        console.log(`Could not edit! ${error}`)
      }
    },
    async getSurveyResult() {
      try {
        const res = await fetch(this.url)
        const data = await res.json()
        return data
      } catch (error) {
        console.log(`Could not get! ${error}`)
      }
    },
    async deleteSurvey(deleteId) {
      try {
        await fetch(`${this.url}/${deleteId}`, {
          method: 'DELETE'
        })
        //filter - higher order function
        this.surveyResults = this.surveyResults.filter(
          (survey) => survey.id !== deleteId
        )
      } catch (error) {
        console.log(`Could not delete! ${error}`)
      }
    },
    async addNewSurvey(newSurvey) {
      try {
        const res = await fetch(this.url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name: newSurvey.name,
            age: newSurvey.age,
            answer1: newSurvey.answer1,
            answer2: newSurvey.answer2,
            answer3: newSurvey.answer3,
          })
        })
        const data = await res.json()
        this.surveyResults = [...this.surveyResults, data]
      } catch (error) {
        console.log(`Could not save! ${error}`)
      }
    }
  },

  async created() {
    this.surveyResults = await this.getSurveyResult()
  }

}

</script>
