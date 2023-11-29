import { defineStore } from 'pinia'
const axios = require('axios');

export const useGeneralStore = defineStore('generalStore', {
    state: () => ({
        skills: [],
        experience: [],
    }),
    getters: {
        getSkills: (state) => {
            return state.skills;
        },
        getExperience(state) {
            return state.experience;
        }
    },
    actions: {
        async fetchSkills() {
            const result = await axios.get('https://us-east-1.aws.data.mongodb-api.com/app/portfolioapp-rfqln/endpoint/skills');
            return result;
        },
        async getEducationFromDB() {
            const result = await axios.get('https://us-east-1.aws.data.mongodb-api.com/app/portfolioapp-rfqln/endpoint/education');
            return result;
        },
        async getExperienceFromDB() {
            const result = [
                {
                    position: "Software Developer - LogicomUSA",
                    description: "Designing, coding, testing, and deploying web applications that meet business needs and requirements. Contribute to the development and implementation of software development best practices, standards, and processes. Researching and prototyping new technologies to use.",
                    time_frame: "Aug 2022 - Present",
                    color: "red"
                },
                {
                    position: "Frontend Developer - LogicomUSA",
                    description: "Responsible for maintaining and creating the front-end of web applications by writing clean, well-documented, and efficient code using HTML, CSS, JavaScript, and other programming languages and frameworks.",
                    time_frame: "Sep 2021 - Aug 2022",
                    color: "green"
                }
            ];
            return result;
        }
    },
})
