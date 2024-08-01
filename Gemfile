source "https://rubygems.org"

gem "jekyll", "~> 3.9.5"
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
	gem "jekyll-minifier"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
	gem "tzinfo", ">= 1", "< 3"
	gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
gem "webrick", "~> 1.8"
