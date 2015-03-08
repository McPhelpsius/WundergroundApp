module.exports = function(grunt){
	grunt.initConfig({
		watch:{
			sass:{
				files: '**/*.scss',
				tasks: 'sass'
			}
		},
		sass: {
			dist: {
				files: {
					'styles/main.css': 'styles/scss/main.scss'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch', 'sass']);
}