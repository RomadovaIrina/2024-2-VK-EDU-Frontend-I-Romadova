'use strict';

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    context: SRC_PATH,
    entry: {
        index: './index.js',
        chatList: './chatList.js'
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].bundle.js'
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                ],
            },
            {
                test: /\.css$/, // Правило для CSS файлов
                include: SRC_PATH,
                use: [
                    MiniCSSExtractPlugin.loader, // Извлекаем CSS в отдельные файлы
                    'css-loader', // Обрабатываем CSS
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Правило для обработки изображений
                include: SRC_PATH,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // Оставляем оригинальные имена файлов
                            outputPath: 'images/', // Путь для изображений в сборке
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css', // Генерация файлов стилей для каждой страницы
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',          // Сборка файла index.html
            template: './index.html',        // Шаблон для главной страницы
            chunks: ['index'],               // Подключаем только index.js
        }),
        new HTMLWebpackPlugin({
            filename: 'chatList.html',       // Сборка файла chatList.html
            template: './chatList.html',     // Шаблон для страницы чатов
            chunks: ['chatList'],            // Подключаем только chatList.js
        })
    ],
    resolve: {
        extensions: ['.js', '.css'], // Можно не указывать расширения при импорте
    }
};