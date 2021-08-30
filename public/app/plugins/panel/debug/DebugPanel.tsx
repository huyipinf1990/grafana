import React, { Component } from 'react';
import { PanelProps } from '@grafana/data';

import { DebugPanelOptions, DebugMode } from './types';
import { EventBusLoggerPanel } from './EventBusLogger';
import { RenderInfoViewer } from './RenderInfoViewer';
import { CursorView } from './CursorView';
import { ExperimentalPanel } from './Experiment';

type Props = PanelProps<DebugPanelOptions>;

export class DebugPanel extends Component<Props> {
  render() {
    const { options } = this.props;
    if (options.mode === DebugMode.Events) {
      return <EventBusLoggerPanel eventBus={this.props.eventBus} />;
    }
    if (options.mode === DebugMode.Cursor) {
      return <CursorView eventBus={this.props.eventBus} />;
    }
    if (options.mode === DebugMode.EX) {
      return <ExperimentalPanel />;
    }

    return <RenderInfoViewer {...this.props} />;
  }
}
