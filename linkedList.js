class LinkedList {
    headNode;
    last;

    constructor() {
        this.headNode = new Node( 'head' );
        this.last = this.headNode;
    };

    append( d ) {
        const node = new Node( d );
        this.last.next = node;
        this.last = node;
    };

    prepend( d ) {
        const node = new Node( d );
        const second = this.headNode.next;
        this.headNode.next = node
        node.next = second;
    };

    size(){
        let s = 0;
        let n = this.headNode;
        while( n.next != null ) {
            s+=1;
            n = n.next;
        };
        return s;
    };

    head(){
        return this.headNode.next;
    };

    tail(){
        return this.last;
    };

    at( i ) {
        let n = 0;
        let node = this.headNode.next;

        while ( i > 0 && n < i ) {
            if ( node.next == null ) {
                return 'invalid';
            }
            node = node.next;
            n++;
        };

        return node;
    };

    pop(){
        let n = this.headNode;
        if ( n.next == null ) { return 'nothing to pop'; }
        while( n.next != null ) {
            if( n.next.next == null ) {
                let end = n.next;
                // let end = new Node( n.next.data );
                n.next = null;
                this.last = n;
                return end;
            };
            n = n.next;
        };
        return 'nothing to pop';
    };

    contains( val ) {
        let n = this.headNode;
        while( n.next != null ) {
            if( n.data == val ) { return true; }
            n = n.next;
        };
        if( this.last.data == val ) { return true; }

        return false;
    };

    find( val ) {
        let i = - 1;
        let n = this.headNode;
        while( n.next != null ) {
            if( n.data == val ) {
                return i;
            }
            i++;
            n = n.next;
        };
        if( this.last.data == val ) { return i; }

        return null;
    };

    insertAt( val, i ){

        let n = 0;
        let prev = this.headNode;
        const valNode = new Node( val );

        while ( i > 0 && n < i ) {
            if ( prev.next == null ) {
                return 'invalid';
            }
            prev = prev.next;
            n++;
        };
        
        // const valNode = new Node( val );
        let next = prev.next;
        prev.next = valNode;
        valNode.next = next;
    };

    toString() {
        // SEARCH HERE
        let out = '';
        let n = this.headNode;
        while( n.next != null ) {
            out += `( ${n.data} ) -> `;
            n = n.next;
        };
        out += `( ${this.last.data} ) -> `;
        out += 'null';
        return out;
    };

};

class Node {
    data = '';
    next = null;

    constructor ( d, n ) {
        this.data = d;
        if ( n ) { this.next = n };
    };
};

export { LinkedList }