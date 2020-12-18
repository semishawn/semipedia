module IndentFilter
	def indent(content, indent = 0)
		tabbed_content = []
		lines = content.lines
		lines.each_with_index do |val, index|
			tabbed_line = ("\t" * indent) + val
			tabbed_content << tabbed_line
		end
		tabbed_content
	end
end

Liquid::Template.register_filter(IndentFilter)