console.log("hi");
angular
  .module('githubApp', [])
  .controller('InstructorController', InstructorController );


function InstructorController() {
  var vm = this;
  vm.instructorList = [
    {
      name: 'Nathan Allen',
      github: 'nathanallen',
      image: 'https://avatars3.githubusercontent.com/u/1489337?',
      position: 'Instructor',
      cohort: 28,
    },
    {
      name: 'Alex White',
      github: 'awhit012',
      image: 'https://avatars0.githubusercontent.com/u/6307308?',
      position: 'Instructor',
      cohort: 26,
    },
    {
      name: 'Nick Brennan',
      github: 'nick-brennan',
      image: 'https://avatars0.githubusercontent.com/u/13402059?v=3&s=460',
      position: 'Developer in Residence',
      cohort: 28,
    },
    {
      name: 'Ilias Tsangaris',
      github: 'iliastsangaris',
      image: 'https://avatars.githubusercontent.com/u/4505008?',
      position: 'Instructor',
      cohort: 26,
    },
    {
      name: 'Briana Veenstra',
      github: 'bgveenstra',
      image: 'https://avatars.githubusercontent.com/u/3254910?',
      position: 'Instructor',
      cohort: 27,
    },
    {
      name: 'Justin Castilla',
      github: 'justincastilla',
      image: 'https://avatars.githubusercontent.com/u/4304660?',
      position: 'Instructor',
      cohort: 28,
    },
    {
      name: 'Cory Fauver',
      github: 'cofauver',
      image: 'https://avatars1.githubusercontent.com/u/6520345?v=3&s=460',
      position: 'Instructor',
      cohort: 27,
    },
    {
      name: 'Ben Hulan',
      github: 'benhulan',
      image: 'https://avatars1.githubusercontent.com/u/7320191?',
      position: 'Instructor',
      cohort: 26,
    },
    {
      name: 'Will Cauthen',
      github: 'willcauthen',
      image: 'https://avatars1.githubusercontent.com/u/14363929?v=3&s=460',
      position: 'Developer In Residence',
      cohort: 27,
    },
    {
      name: 'Dani Zaghian',
      github: 'DaniZaghian',
      image: 'https://avatars3.githubusercontent.com/u/13294925?v=3&s=400',
      position: 'Developer In Residence',
      cohort: 26,
    },
    {
      name: 'Travis Gaff',
      github: 'tgaff',
      image: 'https://avatars2.githubusercontent.com/u/1916144?v=3&s=460',
      position: 'Instructor',
      cohort: 27,
    }
  ];
}
