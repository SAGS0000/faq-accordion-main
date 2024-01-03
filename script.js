document.addEventListener("DOMContentLoaded", function () {
  const questionTitles = document.querySelectorAll(
    ".faq-accordion-question-title"
  );
  console.log(questionTitles);

  questionTitles.forEach(function (title) {
    const button = title.querySelector("button");
    title.addEventListener("click", function () {
      // title.classList.toggle("active");
      button.classList.toggle("active");

      const answer = title.nextElementSibling;
      answer.classList.toggle("active");
    });
  });
});
