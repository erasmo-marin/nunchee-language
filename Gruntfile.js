module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
      "babel": {
        options: {
          sourceMap: true
        },
        dist: {
          files: {
            "build/main.js": "src/main.js"
          }
        }
      }
    });

    grunt.registerTask("default", ["babel"]);
}
