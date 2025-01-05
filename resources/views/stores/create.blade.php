<x-layout title="Adicionar Loja">
    <x-header
        title="Adicionar Loja"
    />

    <main>
        <form action="{{ route('stores.store') }}" method="post">
            @csrf

            <div>
                <label for="name">Nome</label>
                <input type="text" name="name" id="name">
            </div>

            <button type="submit">Adicionar</button>
        </form>
    </main>
</x-layout>