const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        trim: true, // 공백 없애주는거
        unique: 1 //하나만 사용 가능하게
    },
    password: {
        type: String,
        minlength: 5
    },
    role: { // 계정권한 ex)user:0 admin:1
        type: Number,
        default: 0 
    },
    token: String,
    tokenExp: Number //만기
});

const User = mongoose.model('User', userSchema);