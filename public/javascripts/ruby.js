CodeHighlighter.addStyle("ruby",{
	comment : {
		exp  : /#[^\n]+/
	},
	brackets : {
		exp  : /\(|\)/
	},
	string : {
		exp  : /'[^']*'|"[^"]*"/
	},
	constant : {
		exp  : /\b[A-Z][A-Z0-9_]{1,}\b/
	},
	method_definition : {
	  exp : /(def )([A-Za-z0-9_!?]+)/,
	  replacement : "<span class=\"keywords\">def</span> <span class=\"method\">$2</span>"
	},
	keywords : {
		exp  : /(\b(do|end|return|class|def|if|module|yield|then|else|for|until|unless|while|elsif|case|when|break|require|attr_reader|attr_writer|attr_accessor|alias_method|alias|RAILS_ROOT)\b|(validates_[^\s]{1,}))/
	},
	symbol : {
	  exp : /:[A-Za-z0-9_!?]+/
	},
	association : {
	  exp : /\b(has_one|has_many|belongs_to|has_and_belongs_to_many)\b/
	},
	method_call : {
	  exp : /(\.)([A-Za-z0-9_!?]+)/,
	  replacement : "$1<span class=\"method_call\">$2</span>"
	},
	error : {
	  exp : /(\b(raise|rescue|begin|retry|redo|warning|warning:)\b)/
	},
	klass : {
	  exp : /\b([A-Z][A-Za-z0-9_]*)/
	},
	variable : {
	  exp : /((\@{1,2}[a-z][a-zA-Z_\-!?]+)|(\b(self)\b))/
	}
});