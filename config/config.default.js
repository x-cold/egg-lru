'use strict';

exports.lru = {
  app: true,
  agent: false,
  default: {
    stat: true, // 是否输出统计信息
    statInterval: 300000, // 输出统计信息间隔时间
  },
};
