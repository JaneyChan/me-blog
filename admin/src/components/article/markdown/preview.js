import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import PropTypes from 'prop-types';

class MarkdownPreview extends React.PureComponent {
  constructor(props) {
    super(props);
    // init marked
    highlight.initHighlightingOnLoad();
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true, // 允许 GitHub标准的markdown
      tables: true, // 允许支持表格语法,默认为true
      breaks: true, // 允许回车换行,默认为false
      pedantic: false,
      sanitize: true, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
      smartLists: true,
      smartypants: false,
      highlight: (code) => {
        return highlight.highlightAuto(code).value;
      }
    });
  }

  render() {
    const { value } = this.props;
    return <div dangerouslySetInnerHTML={{ __html: marked(value) }} />;
  }
}

MarkdownPreview.propTypes = {
  value: PropTypes.string.isRequired,
  markedOptions: PropTypes.object
};

MarkdownPreview.defaultProps = {
  value: ''
};

export default MarkdownPreview;
