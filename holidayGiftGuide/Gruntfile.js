module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/app.js',
        dest: 'release/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      target: {
        files: {
          'release/main.css': ['css/main.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Minify CSS
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s). 
  grunt.registerTask('default', ['uglify', 'cssmin']);

};