function generateMarkdown(data) {
  return `# ${userReadMeData.title}\n\n## description\n${userReadMeData.description}\n\n## installation\n${userReadMeData.installation}\n\n## license\n${userReadMeData.license}\n\n## usage\n${userReadMeData.usage}\n\n## contributing\n${userReadMeData.contributing}\n\n## tests\n${userReadMeData.tests}\n\n## questions\n${userReadMeData.questions}\n\n## author of program\n<img src="${userReadMeData.avatar_url}" alt="user image" width="500"/>\n\n## author email\n${userReadMeData.email}`;
}

module.exports = generateMarkdown;
