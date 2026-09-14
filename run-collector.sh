#!/bin/bash
# Runs the kill collector and keeps a small log beside it.
# Called every 20 minutes by cron, see the line in `crontab -l`.
cd "$(dirname "$0")" || exit 1
{
  echo "--- $(date '+%Y-%m-%d %H:%M:%S') ---"
  /usr/bin/python3 collect-winrates.py 2>&1
} >> collector.log
# keep the log from growing without end
tail -n 500 collector.log > collector.log.tmp && mv collector.log.tmp collector.log
