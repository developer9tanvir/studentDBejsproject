
const students = require("../modles/studentModles");



/**
 * @dese get all students data
 * @name Get /student/
 * @access public
 */
 const showStudentForm = (req, res) => {
    res.render('create');
}



/**
 * @dese get all students data
 * @name Get /student/
 * @access public
 */
 

const getAllStudents = async (req, res) => {

    let tanvir = await students.find();
    res.render('index', { tanvir });
}


/**
 * @dese get all students data
 * @name Get /student/
 * @access public
 */
 const getSingleStudent = async (req, res) => {
    let id = req.params.id;


    let singleData = await students.findById(id);
    console.log(singleData);
    res.render('show', {singleData});
}


/**
 * @dese get all students data
 * @name Get /student/
 * @access public
 */
 const createStudent = (req, res) => {

    
    students.create({

        // store data to mongoDB
        ...req.body,
        photo : req.file.filename
    });
    
    // redirect to home page
    res.redirect('/student'); 
}

const deleteStudent = async (req, res) => {
    let id = req.params.id;

    await students.findByIdAndDelete(id);
    res.redirect('/student'); 
}

const editFormStudent = async (req, res) => {
    let id = req.params.id;

    let editStudentData = await students.findById(id);
    res.render('edit', {editStudentData}); 
}



// export controllers
module.exports = {
    getAllStudents,
    createStudent,
    getSingleStudent,
    showStudentForm,
    deleteStudent,
    editFormStudent
}