import { defineStore } from 'pinia'
const axios = require('axios');

export const useGeneralStore = defineStore('generalStore', {
    state: () => ({
        skills: [],
    }),
    getters: {
        getSkills: (state) => {
            return state.skills;
        },
    },
    actions: {
        async fetchSkills() {
            const result = await axios.get('https://us-east-1.aws.data.mongodb-api.com/app/portfolioapp-rfqln/endpoint/skills');
            return result;
        },
        async getEducationFromDB() {
            const result = await axios.get('https://us-east-1.aws.data.mongodb-api.com/app/portfolioapp-rfqln/endpoint/education');
            return result;
        }
    },
})
