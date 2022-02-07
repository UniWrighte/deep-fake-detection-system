#!/bin/bash
if [ $1 = $(node hashVideo) ]; then
    echo "ok"
else
    echo "dead"
fi