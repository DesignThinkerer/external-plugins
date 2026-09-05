window.$tw = (function ($tw) {

    "use strict";

    $tw = $tw || Object.create(null);

    $tw.preloadTiddlers = $tw.preloadTiddlers || [];

    $tw.preloadTiddlers = $tw.preloadTiddlers.concat([{"text":"{\"tiddlers\":{\"$:/plugins/theophile.dev/nav/config/ViewTemplateBodyFilters/missing\":{\"text\":\"[is[missing]!is[shadow]then[$:/plugins/theophile.dev/nav/ui/ViewTemplate/missing]]\",\"tags\":\"$:/tags/ViewTemplateBodyFilter $:/plugins/theophile.dev/nav\",\"list-before\":\"\",\"code-body\":\"yes\"},\"$:/plugins/theophile.dev/nav/readme\":{\"text\":\"\\\\import $:/core/ui/ControlPanel/Settings/TitleLinks\\n\\nMake tiddler titles navigable by using a `/`.\\n\\n<$checkbox tiddler=\\\"$:/config/Tiddlers/TitleLinks\\\" checked=\\\"yes\\\" unchecked=\\\"no\\\" field=\\\"text\\\">\\n<span class=\\\"tc-tiny-gap-left\\\"><<lingo Yes/Description>></span>\\n</$checkbox>\",\"tags\":\"$:/tags/ViewTemplateTitleFilter $:/plugins/theophile.dev/nav\"},\"$:/plugins/theophile.dev/nav/ui/ViewTemplate/missing\":{\"text\":\"<<tag>>\\n<$list filter=\\\"[all[tiddlers+shadows]prefix{!!title}]\\\" template=\\\"$:/core/ui/ListItemTemplate\\\"/>\\n\",\"tags\":\"$:/plugins/theophile.dev/nav\",\"code-body\":\"yes\"},\"$:/plugins/theophile.dev/nav/ViewTemplate\":{\"text\":\"<nav style.display=\\\"inline\\\"><$list filter=\\\"[<currentTiddler>split[/]]:map[<..currentTiddler>split[/]butlast<index>join[/]]+[trim[/]unique[]sort[]]\\\" counter=\\\"depth\\\"><$link tag={{{ [<depth-last>match[no]then[span]else[a]] }}} class={{{ [<depth-last>match[no]then[tc-system-title-prefix]] }}}><$text text={{{ [{!!title}split[/]last[]] }}}/></$link><$text text={{{ [<depth-last>match[no]then[/]] }}}/></$list></nav>\",\"tags\":\"$:/plugins/theophile.dev/nav\",\"code-body\":\"yes\"},\"$:/plugins/theophile.dev/nav/ViewTemplateTitleFilters\":{\"text\":\"[[$:/plugins/theophile.dev/nav/ViewTemplate]]\",\"tags\":\"$:/tags/ViewTemplateTitleFilter $:/plugins/theophile.dev/nav\",\"code-body\":\"yes\",\"list-before\":\"\"}}}","core-version":"5.4.0-prerelease","type":"application/json","author":"theophile.dev","list":"readme","version":"0.0.3","description":"navigable titles","plugin-type":"plugin","stability":"STABILITY_1_EXPERIMENTAL","title":"$:/plugins/theophile.dev/nav"}]);

    return $tw;

})(window.$tw);

 