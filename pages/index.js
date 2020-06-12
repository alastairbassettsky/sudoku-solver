import Head from 'next/head'
import {Sudoku} from "../components/Sudoku";


export default function SudokuGame() {
    return (
        <div className="sudokuGame">
            <Head>
                <title>Sudoku</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className="title">
                    Sudoku solver
                </h1>

                <Sudoku/>


            </main>
        </div>
    )
}
