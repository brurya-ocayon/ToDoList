// import axios from 'axios';

// const apiUrl = "https://localhost:7271"

// export default {
//   getTasks: async () => {
//     const result = await axios.get(`${apiUrl}/items`)    
//     return result.data;
//   },

//   addTask: async(name)=>{
//     console.log('addTask', name)
//     //TODO
//     return {};
//   },

//   setCompleted: async(id, isComplete)=>{
//     console.log('setCompleted', {id, isComplete})
//     //TODO
//     return {};
//   },

import axios from 'axios';

// 1. הגדרת כתובת ה-API כברירת מחדל
axios.defaults.baseURL = "http://localhost:5128"; 

// 2. הוספת interceptor לתפיסת שגיאות
axios.interceptors.response.use(
    response => response,
    error => {
        console.error("Axios Interceptor caught an error:", error.response ? error.response.data : error.message);
        return Promise.reject(error);
    }
);

// יצירת אובייקט עם שם כדי למנוע שגיאת import/no-anonymous-default-export
const todoService = {
    // שליפת כל המשימות
    getTasks: async () => {
        const result = await axios.get(`/items`);    
        return result.data;
    },

    // הוספת משימה חדשה
    addTask: async (name) => {
        console.log('addTask', name);
        const result = await axios.post(`/items`, { name: name, isComplete: false });
        return result.data;
    },

    // עדכון מצב משימה
    setCompleted: async (id, isComplete) => {
        console.log('setCompleted', { id, isComplete });
        const result = await axios.put(`/items/${id}`, { isComplete: isComplete });
        return result.data;
    },

    // מחיקת משימה
    deleteTask: async (id) => {
        console.log('deleteTask', id);
        const result = await axios.delete(`/items/${id}`);
        return result.data;
    }
};

// ייצוא המשתנה המוגדר
export default todoService;