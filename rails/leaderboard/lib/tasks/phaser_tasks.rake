#Rake::Task["assets:precompile"].enhance do
#    Rake::Task["phaser:copy_assets"].invoke
#end

#namespace :phaser do
#    task :copy_assets => :"assets:environment"  do
#	FileUtils.mkdir_p 'public/assets/sounds'
#	FileUtils.mkdir_p 'public/assets/html'
#	files = FileList['assets/*.png', 'assets/*.jpg', 'assets/*.json', 'assets/sounds/*.mp3', 'assets/html/*.html']
#    	files.each do |file|
#            dest_file = File.join(Rails.root, 'public', file)
#            FileUtils.copy_file file, dest_file, true
#        end
#    end
#end
