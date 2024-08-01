source "https://rubygems.org"

gem "jekyll", "~> 3.9.5"
gem "github-pages", group: :jekyll_plugins
gem "webrick", "~> 1.8"

group :jekyll_plugins do
	gem "jekyll-minifier"
end

platforms :mingw, :x64_mingw, :mswin do
	gem "wdm", "~> 0.1.1"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
	gem "tzinfo", ">= 1", "< 3"
	gem "tzinfo-data"
end

platforms :jruby do
	gem "http_parser.rb", "~> 0.6.0"
end
