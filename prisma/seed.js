const { PrismaClient } = require('@prisma/client');
const Seed = require('./seeds/data.json');
const { ca } = require('date-fns/locale');

const prisma = new PrismaClient();

async function main() {
  await prisma.role.deleteMany();
  console.log("All roles deleted");

  const roles = [];
  for (const role of Seed.Role) {
    const data = await prisma.role.create({
      data: {
        name: role.name,
        description: role.description
      }
    });
    roles.push({
      id: data.id,
      seedId: data.id
    });
  }
  console.log("Roles created");

  await prisma.institution.deleteMany();
  console.log("All institutions deleted");

  const institutions = [];
  for (const institution of Seed.Institution) {
    const data = await prisma.institution.create({
      data: {
        name: institution.name,
        description: institution.description,
        city: institution.city,
        country: institution.country,
        zip: institution.zip,
        phone: institution.phone,
        email: institution.email,
        website: institution.website,
      }
    });
    institutions.push({
      id: data.id,
      seedId: institution.id
    });
  }
  console.log("Institutions created");

  await prisma.category.deleteMany();
  console.log("All categories deleted");

  const categories = [];
  for (const category of Seed.Category) {
    const data = await prisma.category.create({
      data: {
        name: category.name,
        description: category.description
      }
    });
    categories.push({
      id: data.id,
      seedId: category.id
    });
  }
  console.log("Categories created");

  await prisma.course.deleteMany();
  console.log("All courses deleted");

  const courses = [];
  for (const course of Seed.Course) {
    const data = await prisma.course.create({
      data: {
        name: course.name,
        content: course.content[0],
        reward: course.reward
      }
    });
    courses.push({
      id: data.id,
      seedId: course.id,
    });
  }
  console.log("Courses created");

  await prisma.courseCategory.deleteMany();
  console.log("All course categories deleted");

  const courseCategories = [];
  for (const courseCategory of Seed.CourseCategory) {
    const course = courses.find((course) => course.seedId === courseCategory.courseId)
    const category = categories.find((category) => category.seedId === courseCategory.categoryId)
    const data = await prisma.courseCategory.create({
      data: {
        course: { connect: { id: course.id } },
        category: { connect: { id: category.id } }
      },
    });
    courseCategories.push({
      id: data.id,
      seedId: courseCategory.id
    });
  }
  console.log("Course categories created");

  await prisma.courseInstitution.deleteMany();
  console.log("All course institutions deleted");

  const courseInstitutions = [];
  for (const courseInstitution of Seed.CourseInstitution) {
    const course = courses.find((course) => course.seedId === courseInstitution.courseId)
    const institution = institutions.find((institution) => institution.seedId === courseInstitution.institutionId)
    const data = await prisma.courseInstitution.create({
      data: {
        course: { connect: { id: course.id } },
        institution: { connect: { id: institution.id } }
      },
    });
    courseInstitutions.push({
      id: data.id,
      seedId: courseInstitution.id
    });
  }
  console.log("Course institutions created");

  await prisma.unit.deleteMany();
  console.log("All units deleted");

  const units = [];
  for (const unit of Seed.Unit) {
    const course = courses.find((course) => course.seedId === unit.courseId)
    const data = await prisma.unit.create({
      data: {
        name: unit.name,
        order: unit.order,
        course: { connect: { id: course.id } }
      },
    });
    units.push({
      id: data.id,
      seedId: unit.id
    });
  }
  console.log("Units created");

  await prisma.lessonType.deleteMany();
  console.log("All lesson types deleted");

  const lessonTypes = [];
  for (const lessonType of Seed.LessonType) {
    const data = await prisma.lessonType.create({
      data: {
        name: lessonType.name,
        description: lessonType.description
      },
    });
    lessonTypes.push({
      id: data.id,
      seedId: lessonType.id
    });
  }
  console.log("Lesson types created");

  await prisma.lesson.deleteMany();
  console.log("All lessons deleted");

  const lessons = [];
  for (const lesson of Seed.Lessons) {
    const unit = units.find((unit) => unit.seedId === lesson.unitId)
    const lessonType = lessonTypes.find((lessonType) => lessonType.seedId === lesson.lessonTypeId)
    const data = await prisma.lesson.create({
      data: {
        name: lesson.name,
        order: lesson.order,
        unit: { connect: { id: unit.id } },
        lessonType: { connect: { id: lessonType.id } }
      },
    });
    lessons.push({
      id: data.id,
      seedId: lesson.id
    });
  }
  console.log("Lessons created");

  await prisma.test.deleteMany();
  console.log("All tests deleted");

  const tests = [];
  for (const test of Seed.Test) {
    const lesson = lessons.find((lesson) => lesson.seedId === test.lessonId)
    const data = await prisma.test.create({
      data: {
        description: test.description,
        lesson: { connect: { id: lesson.id } }
      },
    });
    tests.push({
      id: data.id,
      seedId: test.id
    });
  }
  console.log("Tests created");

  await prisma.questionType.deleteMany();
  console.log("All question types deleted");

  const questionTypes = [];
  for (const questionType of Seed.QuestionType) {
    const data = await prisma.questionType.create({
      data: {
        name: questionType.name,
        description: questionType.description
      },
    });
    questionTypes.push({
      id: data.id,
      seedId: questionType.id
    });
  }
  console.log("Question types created");

  await prisma.question.deleteMany();
  console.log("All questions deleted");

  const questions = [];
  for (const question of Seed.Question) {
    const test = tests.find((test) => test.seedId === question.testId)
    const questionType = questionTypes.find((questionType) => questionType.seedId === question.questionTypeId)
    const data = await prisma.question.create({
      data: {
        question: question.question,
        test: { connect: { id: test.id } },
        questionType: { connect: { id: questionType.id } }
      },
    });
    questions.push({
      id: data.id,
      seedId: question.id
    });
  }
  console.log("Questions created"); 

  await prisma.answer.deleteMany();
  console.log("All answers deleted");

  const multipleChoices = [];
  for (const multipleChoice of Seed.MultipleChoice) {
    const question = questions.find((question) => question.seedId === multipleChoice.questionId)
    const data = await prisma.multipleChoice.create({
      data: {
        content: multipleChoice.content,
        question: { connect: { id: question.id } }
      },
    });
    multipleChoices.push({
      id: data.id,
      seedId: multipleChoice.id
    });
  }
  console.log("Multiple choices created");

  await prisma.answer.deleteMany();
  console.log("All answers deleted");

  const answers = [];
  for (const answer of Seed.Answer) {
    const multipleChoice = multipleChoices.find((multipleChoice) => multipleChoice.seedId === answer.multipleChoiceId)
    const data = await prisma.answer.create({
      data: {
        content: answer.content,
        isCorrect: answer.isCorrect,
        multipleChoice: { connect: { id: multipleChoice.id } }
      }
    });
    answers.push({
      id: data.id,
      seedId: answer.id
    });
  }
  console.log("Answers created");

  await prisma.video.deleteMany();
  console.log("All videos deleted");

  const videos = [];
  for (const video of Seed.Video) {
    const lesson = lessons.find((lesson) => lesson.seedId === video.lessonId)
    const data = await prisma.video.create({
      data: {
        content: video.content[0],
        lesson: { connect: { id: lesson.id } }
      },
    });
    videos.push({
      id: data.id,
      seedId: video.id
    });
  }
  console.log("Videos created");

  await prisma.note.deleteMany();
  console.log("All notes deleted");

  const notes = [];
  for (const note of Seed.Note) {
    const video = videos.find((video) => video.seedId === note.videoId)
    const data = await prisma.note.create({
      data: {
        content: note.content,
        video: { connect: { id: video.id } }
      },
    });

    notes.push({
      id: data.id,
      seedId: note.id
    });
  }
  console.log("Notes created");

  await prisma.extraResource.deleteMany();
  console.log("All extra resources deleted");

  const extraResources = [];
  for (const extraResource of Seed.ExtraResource) {
    const video = videos.find((video) => video.seedId === extraResource.videoId)
    const data = await prisma.extraResource.create({
      data: {
        content: extraResource.content,
        video: { connect: { id: video.id } }
      },
    });
    extraResources.push({
      id: data.id,
      seedId: extraResource.id
    });
  }
  console.log("Extra resources created");

  await prisma.lecture.deleteMany();
  console.log("All lectures deleted");

  const lectures = [];
  for (const lecture of Seed.Lecture) {
    const lesson = lessons.find((lesson) => lesson.seedId === lecture.lessonId)
    const data = await prisma.lecture.create({
      data: {
        content: lecture.content[0],
        lesson: { connect: { id: lesson.id } }
      },
    });
    lectures.push({
      id: data.id,
      seedId: lecture.id
    });
  }
  console.log("Lectures created");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

   